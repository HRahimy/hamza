import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import produce from "immer";
import {HttpClient} from "@angular/common/http";
import {FormStatus} from "@hamza/site-ui/shared/models";

export interface NewSubscriberForm {
  model: any;
  dirty: boolean;
  status: FormStatus;
  errors: any;
}

export interface GlobalStateModel {
  newSubscriberForm: NewSubscriberForm
}

const pureSubscriberForm = <NewSubscriberForm>{
  model: undefined,
  dirty: false,
  status: FormStatus.Pure,
  errors: {}
};

export class SubmitNewSubscriberForm {
  static readonly type = '[Global] SubmitNewSubscriberForm';
}

export class OpenNewSubscriberForm {
  static readonly type = '[Global] OpenNewSubscriberForm';
}

@State<GlobalStateModel>({
  name: 'global',
  defaults: {
    newSubscriberForm: pureSubscriberForm
  }
})
@Injectable({
  providedIn: 'root'
})
export class GlobalState {

  constructor(private http: HttpClient) {
  }

  @Selector()
  static newSubscriberForm(state: GlobalStateModel): NewSubscriberForm {
    return state.newSubscriberForm;
  }

  @Action(SubmitNewSubscriberForm)
  async submitNewSubscriberForm(ctx: StateContext<GlobalStateModel>, action: SubmitNewSubscriberForm) {
    ctx.setState(produce(draft => {
      draft.newSubscriberForm.status = FormStatus.SubmissionInProgress;
    }));

    const state = ctx.getState();

    const {name, email} = state.newSubscriberForm.model;

    await this.http.post<any>('/api/mailinglist', {
      name: name,
      email: email
    }).toPromise()
      .then(() => {
        ctx.setState(produce(draft => {
          draft.newSubscriberForm.status = FormStatus.SubmissionSuccess;
        }));
      }).catch((err) => {
        ctx.setState(produce(draft => {
          draft.newSubscriberForm.errors = err;
          draft.newSubscriberForm.status = FormStatus.SubmissionFailure;
        }));
      });
  }

  @Action(OpenNewSubscriberForm)
  openNewSubscriberForm(ctx: StateContext<GlobalStateModel>) {
    const currentState = ctx.getState();

    if (currentState.newSubscriberForm.status === FormStatus.SubmissionSuccess) {
      ctx.setState(produce(draft => {
        draft.newSubscriberForm = pureSubscriberForm;
      }));
    }
  }
}

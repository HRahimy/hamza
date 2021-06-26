import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import produce from "immer";
import {HttpClient} from "@angular/common/http";

export type FormStatus =
  'PURE'
  | 'VALID'
  | 'INVALID'
  | 'SUBMISSION_IN_PROGRESS'
  | 'SUBMISSION_STARTED'
  | 'SUBMISSION_SUCCESS'
  | 'SUBMISSION_FAILURE';

export const FormStatus = {
  Pure: 'PURE' as FormStatus,
  Valid: 'VALID' as FormStatus,
  Invalid: 'INVALID' as FormStatus,
  SubmissionInProgress: 'SUBMISSION_IN_PROGRESS' as FormStatus,
  SubmissionStarted: 'SUBMISSION_STARTED' as FormStatus,
  SubmissionSuccess: 'SUBMISSION_SUCCESS' as FormStatus,
  SubmissionFailure: 'SUBMISSION_FAILURE' as FormStatus
};

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
}

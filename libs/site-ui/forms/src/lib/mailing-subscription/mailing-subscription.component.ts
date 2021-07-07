import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {
  GlobalState,
  NewSubscriberForm,
  OpenNewSubscriberForm,
  SubmitNewSubscriberForm
} from "@hamza/site-ui/shared/state";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'hamza-mailing-subscription',
  templateUrl: './mailing-subscription.component.html',
  styleUrls: ['./mailing-subscription.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MailingSubscriptionComponent implements OnInit {
  newSubscriberForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Select(GlobalState.newSubscriberForm) $subscriberForm?: Observable<NewSubscriberForm>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new OpenNewSubscriberForm());
  }

  onSubmit() {
    if (this.newSubscriberForm.valid) {
      this.store.dispatch(new SubmitNewSubscriberForm()).toPromise();
    }
  }

  onClose() {
  }

}

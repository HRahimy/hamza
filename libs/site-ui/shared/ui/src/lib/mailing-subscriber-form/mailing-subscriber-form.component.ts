import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {GlobalState, NewSubscriberForm, SubmitNewSubscriberForm} from "@hamza/site-ui/shared/state";
import {Observable} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'hamza-mailing-subscriber-form',
  templateUrl: './mailing-subscriber-form.component.html',
  styleUrls: ['./mailing-subscriber-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MailingSubscriberFormComponent {

  newSubscriberForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Select(GlobalState.newSubscriberForm) $subscriberForm!: Observable<NewSubscriberForm>;

  constructor(private store: Store, public dialogRef: MatDialogRef<MailingSubscriberFormComponent>,) {
  }

  onSubmit() {
    this.store.dispatch(new SubmitNewSubscriberForm());
    this.dialogRef.close();
  }

}

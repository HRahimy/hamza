import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {
  GlobalState,
  NewSubscriberForm,
  OpenNewSubscriberForm,
  SubmitNewSubscriberForm
} from "@hamza/site-ui/shared/state";
import {Observable} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'hamza-mailing-subscriber-form',
  templateUrl: './mailing-subscriber-form.component.html',
  styleUrls: ['./mailing-subscriber-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MailingSubscriberFormComponent implements OnInit {

  newSubscriberForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @Select(GlobalState.newSubscriberForm) $subscriberForm?: Observable<NewSubscriberForm>;

  constructor(private store: Store, public dialogRef: MatDialogRef<MailingSubscriberFormComponent>) {
  }

  ngOnInit() {
    this.store.dispatch(new OpenNewSubscriberForm());
  }

  onSubmit() {
    if (this.newSubscriberForm.valid) {
      this.dialogRef.disableClose = true;
      this.store.dispatch(new SubmitNewSubscriberForm()).toPromise().then(value => {
        this.dialogRef.disableClose = false;
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}

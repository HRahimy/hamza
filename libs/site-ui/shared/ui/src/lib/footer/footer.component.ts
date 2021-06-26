import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MailingSubscriberFormComponent} from "../mailing-subscriber-form/mailing-subscriber-form.component";

@Component({
  selector: 'hamza-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent {

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(MailingSubscriberFormComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

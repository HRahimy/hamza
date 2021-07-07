import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MailingSubscriberFormComponent} from "../mailing-subscriber-form/mailing-subscriber-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'hamza-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent {

  constructor(private router: Router) { }
  openDialog(): void {
    this.router.navigate(['/subscribe']);
  }

}

import { Component, ViewEncapsulation } from '@angular/core';
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

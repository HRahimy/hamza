import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingSubscriptionComponent } from './mailing-subscription.component';

describe('MailingSubscriptionComponent', () => {
  let component: MailingSubscriptionComponent;
  let fixture: ComponentFixture<MailingSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailingSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

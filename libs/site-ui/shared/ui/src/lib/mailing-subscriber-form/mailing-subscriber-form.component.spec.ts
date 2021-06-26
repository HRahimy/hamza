import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingSubscriberFormComponent } from './mailing-subscriber-form.component';

describe('MailingSubscriberFormComponent', () => {
  let component: MailingSubscriberFormComponent;
  let fixture: ComponentFixture<MailingSubscriberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailingSubscriberFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingSubscriberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

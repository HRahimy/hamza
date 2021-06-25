import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderedListComponent } from './headered-list.component';

describe('HeaderedListComponent', () => {
  let component: HeaderedListComponent;
  let fixture: ComponentFixture<HeaderedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

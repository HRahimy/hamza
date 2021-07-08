import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUiContentComponent } from './site-ui-content.component';

describe('SiteUiContentComponent', () => {
  let component: SiteUiContentComponent;
  let fixture: ComponentFixture<SiteUiContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteUiContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

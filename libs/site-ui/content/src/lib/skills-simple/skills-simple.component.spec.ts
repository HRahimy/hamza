import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSimpleComponent } from './skills-simple.component';

describe('SkillsSimpleComponent', () => {
  let component: SkillsSimpleComponent;
  let fixture: ComponentFixture<SkillsSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftAndHardSkillsComponent } from './soft-and-hard-skills.component';

describe('SoftAndHardSkillsComponent', () => {
  let component: SoftAndHardSkillsComponent;
  let fixture: ComponentFixture<SoftAndHardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftAndHardSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftAndHardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

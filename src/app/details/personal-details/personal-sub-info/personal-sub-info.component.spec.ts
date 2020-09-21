import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSubInfoComponent } from './personal-sub-info.component';

describe('PersonalSubInfoComponent', () => {
  let component: PersonalSubInfoComponent;
  let fixture: ComponentFixture<PersonalSubInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSubInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSubInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

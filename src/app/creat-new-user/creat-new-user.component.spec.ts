import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatNewUserComponent } from './creat-new-user.component';

describe('CreatNewUserComponent', () => {
  let component: CreatNewUserComponent;
  let fixture: ComponentFixture<CreatNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

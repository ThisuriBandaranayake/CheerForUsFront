import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ISignUpComponent } from './isign-up.component';

describe('ISignUpComponent', () => {
  let component: ISignUpComponent;
  let fixture: ComponentFixture<ISignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

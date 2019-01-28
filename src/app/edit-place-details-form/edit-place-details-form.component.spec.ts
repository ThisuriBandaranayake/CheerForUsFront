import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceDetailsFormComponent } from './edit-place-details-form.component';

describe('EditPlaceDetailsFormComponent', () => {
  let component: EditPlaceDetailsFormComponent;
  let fixture: ComponentFixture<EditPlaceDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaceDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

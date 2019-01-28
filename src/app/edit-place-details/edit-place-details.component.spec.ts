import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceDetailsComponent } from './edit-place-details.component';

describe('EditPlaceDetailsComponent', () => {
  let component: EditPlaceDetailsComponent;
  let fixture: ComponentFixture<EditPlaceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlaceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

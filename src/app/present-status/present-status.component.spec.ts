import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentStatusComponent } from './present-status.component';

describe('PresentStatusComponent', () => {
  let component: PresentStatusComponent;
  let fixture: ComponentFixture<PresentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

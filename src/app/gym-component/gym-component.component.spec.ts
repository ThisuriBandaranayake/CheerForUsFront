import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymComponentComponent } from './gym-component.component';

describe('GymComponentComponent', () => {
  let component: GymComponentComponent;
  let fixture: ComponentFixture<GymComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

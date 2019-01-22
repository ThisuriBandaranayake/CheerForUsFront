import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsideNavComponent } from './iside-nav.component';

describe('IsideNavComponent', () => {
  let component: IsideNavComponent;
  let fixture: ComponentFixture<IsideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

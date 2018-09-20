import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoatArticlesComponent } from './poat-articles.component';

describe('PoatArticlesComponent', () => {
  let component: PoatArticlesComponent;
  let fixture: ComponentFixture<PoatArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoatArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoatArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

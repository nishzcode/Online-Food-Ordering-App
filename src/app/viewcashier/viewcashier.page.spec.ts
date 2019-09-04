import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcashierPage } from './viewcashier.page';

describe('ViewcashierPage', () => {
  let component: ViewcashierPage;
  let fixture: ComponentFixture<ViewcashierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcashierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcashierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

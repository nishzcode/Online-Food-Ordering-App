import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcashierPage } from './addcashier.page';

describe('AddcashierPage', () => {
  let component: AddcashierPage;
  let fixture: ComponentFixture<AddcashierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcashierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcashierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

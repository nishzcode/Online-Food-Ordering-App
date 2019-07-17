import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofferPage } from './addoffer.page';

describe('AddofferPage', () => {
  let component: AddofferPage;
  let fixture: ComponentFixture<AddofferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddofferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddofferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

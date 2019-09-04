import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanagerPage } from './addmanager.page';

describe('AddmanagerPage', () => {
  let component: AddmanagerPage;
  let fixture: ComponentFixture<AddmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

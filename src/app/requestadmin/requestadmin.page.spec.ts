import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestadminPage } from './requestadmin.page';

describe('RequestadminPage', () => {
  let component: RequestadminPage;
  let fixture: ComponentFixture<RequestadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

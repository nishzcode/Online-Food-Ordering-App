import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrequestsPage } from './viewrequests.page';

describe('ViewrequestsPage', () => {
  let component: ViewrequestsPage;
  let fixture: ComponentFixture<ViewrequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmanagerPage } from './viewmanager.page';

describe('ViewmanagerPage', () => {
  let component: ViewmanagerPage;
  let fixture: ComponentFixture<ViewmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmanagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

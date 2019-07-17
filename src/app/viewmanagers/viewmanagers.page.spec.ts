import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmanagersPage } from './viewmanagers.page';

describe('ViewmanagersPage', () => {
  let component: ViewmanagersPage;
  let fixture: ComponentFixture<ViewmanagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmanagersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmanagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

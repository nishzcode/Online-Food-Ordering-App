import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificitemPage } from './specificitem.page';

describe('SpecificitemPage', () => {
  let component: SpecificitemPage;
  let fixture: ComponentFixture<SpecificitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificitemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

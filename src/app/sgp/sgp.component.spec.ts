import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgpComponent } from './sgp.component';

describe('SgpComponent', () => {
  let component: SgpComponent;
  let fixture: ComponentFixture<SgpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

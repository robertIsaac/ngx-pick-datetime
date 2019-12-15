import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPickDatetimeComponent } from './ngx-pick-datetime.component';

describe('NgxPickDatetimeComponent', () => {
  let component: NgxPickDatetimeComponent;
  let fixture: ComponentFixture<NgxPickDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPickDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPickDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITVDNChangeDetection01Component } from './i-t-v-d-n-change-detection01.component';

describe('ITVDNChangeDetection01Component', () => {
  let component: ITVDNChangeDetection01Component;
  let fixture: ComponentFixture<ITVDNChangeDetection01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITVDNChangeDetection01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITVDNChangeDetection01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

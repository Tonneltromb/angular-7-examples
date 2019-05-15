import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOneTestComponent } from './example-one-test.component';

describe('ExampleOneTestComponent', () => {
  let component: ExampleOneTestComponent;
  let fixture: ComponentFixture<ExampleOneTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOneTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

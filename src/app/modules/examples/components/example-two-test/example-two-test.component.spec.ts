import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTwoTestComponent } from './example-two-test.component';

describe('ExampleTwoTestComponent', () => {
  let component: ExampleTwoTestComponent;
  let fixture: ComponentFixture<ExampleTwoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTwoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTwoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

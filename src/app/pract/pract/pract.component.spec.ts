import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractComponent } from './pract.component';

describe('PractComponent', () => {
  let component: PractComponent;
  let fixture: ComponentFixture<PractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

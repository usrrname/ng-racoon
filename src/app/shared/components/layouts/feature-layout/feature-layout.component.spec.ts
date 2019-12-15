import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLayoutComponent } from './feature-layout.component';

describe('FeatureLayoutComponent', () => {
  let component: FeatureLayoutComponent;
  let fixture: ComponentFixture<FeatureLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

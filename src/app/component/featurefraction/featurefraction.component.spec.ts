import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturefractionComponent } from './featurefraction.component';

describe('FeaturefractionComponent', () => {
  let component: FeaturefractionComponent;
  let fixture: ComponentFixture<FeaturefractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturefractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturefractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

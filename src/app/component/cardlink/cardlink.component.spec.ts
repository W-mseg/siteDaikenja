import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlinkComponent } from './cardlink.component';

describe('CardlinkComponent', () => {
  let component: CardlinkComponent;
  let fixture: ComponentFixture<CardlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

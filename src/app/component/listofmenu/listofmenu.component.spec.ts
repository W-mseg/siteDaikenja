import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofmenuComponent } from './listofmenu.component';

describe('ListofmenuComponent', () => {
  let component: ListofmenuComponent;
  let fixture: ComponentFixture<ListofmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

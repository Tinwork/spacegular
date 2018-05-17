import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinworkCardComponent } from './tinwork-card.component';

describe('TinworkCardComponent', () => {
  let component: TinworkCardComponent;
  let fixture: ComponentFixture<TinworkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinworkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinworkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

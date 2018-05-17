import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinworkCardActionComponent } from './tinwork-card-action.component';

describe('TinworkCardActionComponent', () => {
  let component: TinworkCardActionComponent;
  let fixture: ComponentFixture<TinworkCardActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinworkCardActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinworkCardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

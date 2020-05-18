import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptBodyComponent } from './recipt-body.component';

describe('ReciptBodyComponent', () => {
  let component: ReciptBodyComponent;
  let fixture: ComponentFixture<ReciptBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

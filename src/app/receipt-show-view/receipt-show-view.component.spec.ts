import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptShowViewComponent } from './receipt-show-view.component';

describe('ReceiptShowViewComponent', () => {
  let component: ReceiptShowViewComponent;
  let fixture: ComponentFixture<ReceiptShowViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptShowViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

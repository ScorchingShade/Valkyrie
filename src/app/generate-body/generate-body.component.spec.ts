import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBodyComponent } from './generate-body.component';

describe('GenerateBodyComponent', () => {
  let component: GenerateBodyComponent;
  let fixture: ComponentFixture<GenerateBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

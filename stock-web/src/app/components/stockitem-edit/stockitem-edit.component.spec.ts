import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemEditComponent } from './stockitem-edit.component';

describe('StockitemEditComponent', () => {
  let component: StockitemEditComponent;
  let fixture: ComponentFixture<StockitemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockitemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockitemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemCreateComponent } from './stockitem-create.component';

describe('StockitemCreateComponent', () => {
  let component: StockitemCreateComponent;
  let fixture: ComponentFixture<StockitemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockitemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockitemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

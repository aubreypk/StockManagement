import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockitemListComponent } from './stockitem-list.component';

describe('StockitemListComponent', () => {
  let component: StockitemListComponent;
  let fixture: ComponentFixture<StockitemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockitemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

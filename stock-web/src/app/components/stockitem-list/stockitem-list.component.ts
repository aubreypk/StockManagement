import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { StockItem } from 'src/app/model/stock-item';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-stockitem-list',
  templateUrl: './stockitem-list.component.html',
  styleUrls: ['./stockitem-list.component.css']
})
export class StockitemListComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone ) {
    // DI
  }

  stockItems: StockItem[];
  page = 1;
  pages = 1;
  total = 0;
  limit = 10;
  pageTotal = 0;

  counter(i: number) {
    return new Array(i);
  }

  getActivePage(page: number, pages: number) {
    if (page === pages) {
      return 'active';
    } else {
      return ' ';
    }
  }

  ngOnInit() {
    // get selected page or default
    this.route.queryParams.pipe(
      filter(params => params.page))
      .subscribe(params => {
        console.log(params);

        this.page = params.page;
        console.log(this.page);
      }
    );
    // Component init
    this.apiService.getStockItems(this.page as unknown as string)
      .subscribe(data => {
        this.stockItems = data;
        console.log(data);
      });

    this.apiService.getStockItemsData(this.page as unknown as string)
      .subscribe(data => {
        this.pages = data.pages;
        this.limit = data.limit;
        this.total = data.total;
        this.pageTotal = this.page < this.pages ? this.limit : this.total - ((this.pages - 1) * this.limit);
      });
  }

  deleteStockItem(id: number) {
    this.apiService.deleteStockItem(id as unknown as string)
    .subscribe(data => {
      console.log(data);
    });
    this.ngZone.run(() => this.router.navigateByUrl('/list-stockitem'));
  }
}

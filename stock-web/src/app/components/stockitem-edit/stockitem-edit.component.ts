import { Component, OnInit,  NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../service/api.service';
import { StockItem } from 'src/app/model/stock-item';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-stockitem-edit',
  templateUrl: './stockitem-edit.component.html',
  styleUrls: ['./stockitem-edit.component.css']
})

export class StockitemEditComponent implements OnInit {
  submitted = false;
  stockItemForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    // DI
  }

  public newStockItem: StockItem = new StockItem();
  public accessoryName = '';
  public accessoryDescription = '';
  public id: string;

  ngOnInit() {
    // get selected page or default
    this.route.params.pipe(
      filter(params => params.id))
      .subscribe(params => {
        console.log(params);

        this.id = params.id;
        console.log(this.id);
      }
    );
    // Component init
    this.apiService.getStockItem(this.id as unknown as string)
      .subscribe(data => {
        this.newStockItem = data;
        console.log(data);
      });
  }

  onAddImage(event) {
    this.newStockItem.images.push({name: 'Image ' + this.newStockItem.images.length, data: event.target.files[0], contentType: ''});
  }

  onAddAccessory() {
    this.newStockItem.accessories.push({name: this.accessoryName, description: this.accessoryDescription});
  }

  onSubmit() {
    this.submitted = true;
    this.apiService.updateStockItem(this.newStockItem).subscribe(
      (res) => {
        console.log('Successfully updated stock item!');
        this.ngZone.run(() => this.router.navigateByUrl('/list-stockitem'));
      }, (error) => {
        console.log(error);
      });
    this.router.navigateByUrl('/list-stockitem');
  }

}

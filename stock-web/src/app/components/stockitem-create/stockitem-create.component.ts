import { Component, OnInit,  NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../service/api.service';
import { StockItem } from 'src/app/model/stock-item';

@Component({
  selector: 'app-stockitem-create',
  templateUrl: './stockitem-create.component.html',
  styleUrls: ['./stockitem-create.component.css']
})

export class StockitemCreateComponent implements OnInit {
  submitted = false;
  stockItemForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    // DI
  }

  public newStockItem: StockItem = new StockItem();
  public accessoryName = '';
  public accessoryDescription = '';

  ngOnInit() { }

  onAddImage(event) {
    this.newStockItem.images.push({name: 'Image ' + this.newStockItem.images.length, data: event.target.files[0], contentType: ''});
  }

  onAddAccessory() {
    this.newStockItem.accessories.push({name: this.accessoryName, description: this.accessoryDescription});
  }

  onSubmit() {
    this.submitted = true;
    this.apiService.createStockItem(this.newStockItem).subscribe(
      (res) => {
        console.log('Successfully created new stock item!');
        this.ngZone.run(() => this.router.navigateByUrl('/list-stockitem'));
      }, (error) => {
        console.log(error);
      });
  }
}

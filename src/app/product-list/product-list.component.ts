import { Component } from '@angular/core';

import { pedals } from '../pedals';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pedals = [...pedals];

}

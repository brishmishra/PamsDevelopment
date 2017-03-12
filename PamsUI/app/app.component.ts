
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    selector: 'my-app',    
    templateUrl: '/UIPams/Index.html',
    providers: [ProductService]
})

export class AppComponent implements OnInit {

    constructor(private _productService: ProductService) {
    }

    products: IProduct[];
    errorMessage: string;

    ngOnInit(): void {
        console.log('start');
        this._productService.getProducts().subscribe(products => this.products = products, error => this.errorMessage = <any>error);
        console.log('end');
    }
}
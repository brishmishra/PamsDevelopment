
import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'

import { IProduct } from './product';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

@Injectable()

export class ProductService {

    constructor(private _http: Http) {
    }

    private prodUrl = 'http://localhost:8080/api/products';

    //products: IProduct[];

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.prodUrl).map((response: Response) => <IProduct[]>response.json())
            .do(data1 => console.log('All: ' + JSON.stringify(data1)))
            .catch(this.handleError);
    }

    
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
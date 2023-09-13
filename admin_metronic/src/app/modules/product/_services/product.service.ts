import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { AuthService } from '../../auth';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  
  constructor(
    private http: HttpClient,
    public authservice: AuthService,
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }
  
  allProducts(search='',categorie=null){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let LINK = "";
    console.log("value categorie:", categorie);
    if (search){
      LINK+= "?search=" + search;
    } else {
      LINK+= "?search=";
    }
    if (categorie){
      LINK+= "&categorie=" + categorie;
    } else {
      LINK+= "&categorie=";
    }
    let URL = URL_SERVICIOS + "/products/list" + LINK;
    return this.http.get(URL, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  
  showProduct(product_id=''){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/show/" + product_id;
    return this.http.get(URL, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  createProduct(data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/register";
    return this.http.post(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateProduct(data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/update";
    return this.http.put(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteProduct(product_id){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/delete?_id=" + product_id;
    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  
  // galeria
  createGaleria(data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/register_imagen";
    return this.http.post(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteGaleria(data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/remove_imagen";
    return this.http.post(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // variedad
  createVariedad(data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/register-variedad";
    return this.http.post(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateVariedad(data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/update-variedad";
    return this.http.put(URL, data, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteVariedad(variedad_id){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'token': this.authservice.token});
    let URL = URL_SERVICIOS + "/products/delete-variedad/" + variedad_id;
    return this.http.delete(URL, {headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { CategoriesService } from '../../categories/_services/categories.service';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  title:any = null;
  sku:any = null;
  categories:any = [];
  categorie:any = "";
  price_pesos:any = 0;   
  imagen_file:any = null;
  imagen_previzualizacion:any = null;
  resumen:any = null;
  description:any = null;
  tag:any = null;
  tags:any = [];
  isLoading$:any;

  constructor(
    public _productService:ProductService,
    public _categorieService:CategoriesService,
    public toaster:Toaster,
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._productService.isLoading$;
    this._categorieService.allCategories().subscribe((resp:any) => {
      console.log(resp);
      this.categories = resp.categories;
      this.loadServices();
    })
  }

  loadServices(){
    this._productService.isLoadingSubject.next(true);
    setTimeout(() => {
      this._productService.isLoadingSubject.next(false);
    }, 50);
  }

  processFile($event){
    if($event.target.files[0].type.indexOf("image") < 0){
      this.imagen_previzualizacion = null;
      this.toaster.open(NoticyAlertComponent,{text:`danger-¡Es necesario ingresar un archivo de tipo imagen!`});
      return;
    }
    this.imagen_file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.imagen_file);
    reader.onloadend = () => this.imagen_previzualizacion = reader.result;
    this.loadServices();
  }

  addTag(){
    this.tags.push(this.tag);
    this.tag = "";
  }
  removeTag(i){
    this.tags.splice(i,1);
  }

  save(){
    if(!this.title || !this.categorie || !this.price_pesos || !this.resumen || !this.description
      || !this.sku || this.tags.length == 0 || !this.imagen_file){
        this.toaster.open(NoticyAlertComponent,{text:`danger-¡ES NECESARIO DIGITAR TODOS LOS CAMPOS DEL FORMULARIO!`});
        return;
    }
    let formData = new FormData();
    formData.append("title", this.title);
    formData.append("categorie", this.categorie);
    formData.append("sku", this.sku);
    formData.append("price_pesos", this.price_pesos);
    formData.append("description", this.description);
    formData.append("resumen", this.resumen);
    formData.append("tags", JSON.stringify(this.tags));
    formData.append("imagen", this.imagen_file);

    this._productService.createProduct(formData).subscribe((resp:any) => {
      console.log(resp);
      if (resp.code == 403){
        this.toaster.open(NoticyAlertComponent,{text:`danger-¡EL PRODUCTO YA EXISTE, ELIGE OTRO NOMBRE!`});
        return;
      } else {
        this.toaster.open(NoticyAlertComponent,{text:`primary-¡EL PRODUCTO SE REGISTRÓ EXITOSAMENTE!`});
        this.title = null; 
        this.categorie = null;
        this.sku = null;
        this.price_pesos = null;
        this.description = null;
        this.resumen = null;
        this.tags = [];
        this.imagen_file = null;
        this.imagen_previzualizacion = null;
        return;
      }
    })

  }
}

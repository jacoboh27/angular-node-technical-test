import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-add-new-categorie',
  templateUrl: './add-new-categorie.component.html',
  styleUrls: ['./add-new-categorie.component.scss']
})
export class AddNewCategorieComponent implements OnInit {

  @Output() CategorieC: EventEmitter<any> = new EventEmitter();

  isLoading$:any;
  name:any = null;

  imagen_file:any = null;
  imagen_previzualizacion:any = null;
  constructor(
    public _categorieService: CategoriesService,
    public modal:NgbActiveModal,
    public toaster: Toaster,
  ) { }

  ngOnInit(): void {
  }

  processFile($event){
    console.log($event.target);
    if($event.target.files[0].type.indexOf("image") < 0){
      this.imagen_previzualizacion = null;
      this.toaster.open(NoticyAlertComponent,{text:`danger-Debes subir un archivo de tipo imagen`});
      return;
    }
    this.imagen_file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.imagen_file);
    reader.onloadend = () => this.imagen_previzualizacion = reader.result;
  }

  save(){
    console.log(this.name);
    if(!this.name || !this.imagen_file){
      this.toaster.open(NoticyAlertComponent,{text:`danger-Es necesario ingresar todos los campos`});
      return;
    }
    let formData = new FormData();
    formData.append('title',this.name);
    formData.append('portada',this.imagen_file);

    // 
    this._categorieService.createCategorie(formData).subscribe((resp:any) => {
      console.log(resp);
      this.CategorieC.emit(resp);
      this.toaster.open(NoticyAlertComponent,{text:`success-¡CATEGORÍA REGISTRADA EXITOSAMENTE!`});
      this.modal.close();
    })
  }
}

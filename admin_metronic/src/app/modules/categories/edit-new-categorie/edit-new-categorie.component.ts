import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { URL_BACKEND } from 'src/app/config/config';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-edit-new-categorie',
  templateUrl: './edit-new-categorie.component.html',
  styleUrls: ['./edit-new-categorie.component.scss']
})
export class EditNewCategorieComponent implements OnInit {

  @Output() CategorieE: EventEmitter<any> = new EventEmitter();
  @Input() categorie_selected:any;
  isLoading$:any;
  name:any = null;

  imagen_file:any = null;
  imagen_previzualizacion:any = null;
  state:any = null;
  constructor(
    public _categorieService: CategoriesService,
    public modal:NgbActiveModal,
    public toaster: Toaster,
  ) { }

  ngOnInit(): void {
    this.name = this.categorie_selected.title;
    this.state = this.categorie_selected.state;
    this.imagen_previzualizacion = URL_BACKEND+'api/categories/uploads/categorie/'+this.categorie_selected.imagen;
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
    if(!this.name){
      this.toaster.open(NoticyAlertComponent,{text:`danger-Es necesario ingresar todos los campos`});
      return;
    }
    let formData = new FormData();
    formData.append('_id',this.categorie_selected._id);
    formData.append('title',this.name);
    formData.append('state',this.state);
    if(this.imagen_file){
      formData.append('portada',this.imagen_file);
    }

    this._categorieService.updateCategorie(formData).subscribe((resp:any) => {
      console.log(resp);
      this.CategorieE.emit(resp.categorie);
      this.toaster.open(NoticyAlertComponent,{text:`success-¡CATEGORÍA ACTUALIZADA EXITOSAMENTE!`});
      this.modal.close();
    })
  }

}
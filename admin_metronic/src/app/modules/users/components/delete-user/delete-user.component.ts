import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';
import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  @Output() UserD: EventEmitter<any> = new EventEmitter();
  @Input() user_selected:any;

  constructor(
    public modal: NgbActiveModal,
    public userService: UsersService,
    public toaster: Toaster,
  ) { }

  ngOnInit(): void { }

  delete(){
    this.userService.deleteUser(this.user_selected._id).subscribe((resp:any) => {
      console.log(resp);
      this.UserD.emit("");
      this.toaster.open(NoticyAlertComponent,{text:`success-¡REGISTRO DE USUARIO ELIMINADO EXITOSAMENTE!`});
      this.modal.close();
    }, (error) => {
      if(error.error){
        this.toaster.open(NoticyAlertComponent,{text:`danger-'${error.error.message}'`});
      }
    })
  }
}
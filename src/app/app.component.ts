import {Component, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}
  title = 'vibranttask';
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'modal-lg' }));
  }
  closeModal(){
    this.modalRef.hide();
  }
}

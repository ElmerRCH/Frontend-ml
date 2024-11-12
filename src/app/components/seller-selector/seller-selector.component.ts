import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seller-selector',
  templateUrl: './seller-selector.component.html',
  styleUrls: ['./seller-selector.component.css']
})
export class SellerSelectorComponent {

  @Output() modal: EventEmitter<boolean>;

  constructor(){
    this.modal = new EventEmitter()

  }

  closeModal(){
    this.modal.emit()

  }
}

import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-seller-selector',
  templateUrl: './seller-selector.component.html',
  styleUrls: ['./seller-selector.component.css']
})
export class SellerSelectorComponent {

  constructor(){

    this.modal = new EventEmitter()
  }


  @Output() modal: EventEmitter<boolean>;

  closeModal(){
    this.modal.emit()
    
  }

}

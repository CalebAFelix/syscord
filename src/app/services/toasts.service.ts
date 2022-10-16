import { EventEmitter, Injectable } from '@angular/core';
import { Toast } from '../types/Toast';

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  addToastEmitter = new EventEmitter<Toast>();

  constructor() {
    this.new({body: 'Toast 1', title: 'Title Toast 1', delay: 60000, classname: 'bg-primary text-light'});
    this.new({body: 'Toast ', title: 'Title Toast 2', delay: 60000, classname: 'bg-primary text-light'});
  }

  new(toast:Toast) {
    this.addToastEmitter.emit(toast);
  }

}

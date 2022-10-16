import { Component, OnInit } from '@angular/core';
import { ToastsService } from 'src/app/services/toasts.service';
import { Toast } from 'src/app/types/Toast';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

  toasts: Toast[] = [];

  constructor( private toastSerice: ToastsService) { }

  ngOnInit(): void {
    this.toastSerice.addToastEmitter.subscribe(toast => {
      this.toasts.push(toast);
    });
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

}

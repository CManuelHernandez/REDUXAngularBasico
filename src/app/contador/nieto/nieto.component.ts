import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: ``,
})
export class NietoComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {}

  //@Input() contador!: number;
  //@Output() contadorCambio = new EventEmitter<number>();
  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  reset() {
    //this.contador = 0;
    //this.contadorCambio.emit(0);
    this.store.dispatch(actions.reset());
  }
}

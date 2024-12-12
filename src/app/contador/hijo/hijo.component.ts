import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: ``,
})
export class HijoComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }
  //@Input() contador!: number;
  //@Output() cambioContador = new EventEmitter<number>();

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador: number) {
    // this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}

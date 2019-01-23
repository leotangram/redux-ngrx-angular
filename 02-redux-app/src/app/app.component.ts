import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import * as fromContador from './contador/contador.actions'
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('contador')
      .subscribe( contador => this.contador = contador)
  }

  incrementar() {
    const accion = new fromContador.IncrementarAction()
    this.store.dispatch(accion)
  }

  decrementar() {
    const accion = new fromContador.DecrementarAction()
    // this.contador ++
    this.store.dispatch(accion)
  }
}

import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador-actions';

interface AppState {
  contador: number
}

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
    this.store.subscribe( state => {
      this.contador = state.contador
    })
  }

  incrementar() {
    const accion = new IncrementarAction()
    this.store.dispatch(accion)
  }

  decrementar() {
    const accion = new DecrementarAction()
    // this.contador ++
    this.store.dispatch(accion)
  }
}

import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

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
    // this.contador = 10
    this.store.subscribe( state => {
      this.contador = state.contador
    })
  }

  incrementar() {
    const accion: Action = {
      type: 'INCREMENTAR'
    }
    // this.contador ++
    this.store.dispatch(accion)
  }

  decrementar() {
    const accion: Action = {
      type: 'DECREMENTAR'
    }
    // this.contador ++
    this.store.dispatch(accion)
  }
}

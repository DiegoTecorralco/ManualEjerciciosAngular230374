import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-01',
  template: `
    <div class="hello-universe">
      <h1>Hello Universe</h1>
    </div>
  `,
  styles: [`
    :host {
      color:rgba(160, 68, 235, 0.8);
    }

    .hello-universe {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh; /* Reduce la altura del div */
      background-color:rgba(147, 248, 209, 0.57);
    }

    h1 {
      font-size: 4em;
      text-align: center;
    }
  `]
})
export class Ejercicio01Component {

}

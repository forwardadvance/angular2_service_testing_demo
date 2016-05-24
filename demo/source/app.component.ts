import { Component } from '@angular/core';
import { Cats } from './cats.service';
@Component({
  selector: 'app',
  template: `
    <h1>Cats App</h1>
    {{cats | json}}
  `,
  providers: [Cats]
})
export class AppComponent {
  cats:any
  constructor(cats:Cats) {
    this.cats = cats.get();
  }
 }

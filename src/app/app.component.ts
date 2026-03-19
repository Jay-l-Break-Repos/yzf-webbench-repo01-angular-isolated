import { Component } from '@angular/core'
import { HeaderComponent } from './header/header.component'
import { MainComponent } from './main/main.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  template: `
    <app-header></app-header>
    <app-main></app-main>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class AppComponent {
  title = 'angular'
}

import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1>Hello Blog</h1>
    </header>
  `,
  styles: `
    .header {
      background-color: #3f51b5;
      color: #ffffff;
      padding: 16px 24px;
    }
    .header h1 {
      margin: 0;
    }
  `,
})
export class HeaderComponent {}

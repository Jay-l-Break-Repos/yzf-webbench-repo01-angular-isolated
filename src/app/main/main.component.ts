import { Component } from '@angular/core'
import { BlogComponent } from '../blog/blog.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BlogComponent],
  template: `
    <main>
      <app-blog title="Morning" detail="Morning My Friends"></app-blog>
    </main>
  `,
  styles: ``,
})
export class MainComponent {}

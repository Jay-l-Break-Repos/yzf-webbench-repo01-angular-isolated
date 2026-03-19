import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  template: `
    <article>
      <h2 class="blog-title">{{ title }}</h2>
      <p class="blog-detail">{{ detail }}</p>
    </article>
  `,
  styles: `
    .blog-title {
      width: fit-content;
      font-size: 24px;
    }
  `,
})
export class BlogComponent {
  @Input() title: string = ''
  @Input() detail: string = ''
}

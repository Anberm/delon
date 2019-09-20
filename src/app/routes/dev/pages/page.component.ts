import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dev-page',
  template: `
    <page-header></page-header>
    page: {{ router.url | json }} <br />
    time:{{ time }}
  `,
})
export class DevPageComponent {
  time = new Date();
  constructor(public router: ActivatedRoute) {}
}

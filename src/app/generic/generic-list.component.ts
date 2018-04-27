import { Component } from '@angular/core';

@Component({
  template: `
      <h1> + componentConfig.moduleTitle +  list page</h1>
      <ul>
          <li>Lorem <a routerLink="../edit/1">(edit)</a></li>
          <li>Ipsum <a routerLink="../edit/2">(edit)</a></li>
      </ul>
  `
})
export class AppGenericListComponent {}

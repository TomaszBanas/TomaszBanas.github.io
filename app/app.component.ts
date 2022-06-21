import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tomasz Banaś';

  constructor(private router: Router) { }

  public isPath(path: string): boolean {
    return this.router.url.endsWith(path);
  }
  public route(path: string): void {
    this.router.navigate([path], {});
  }

}

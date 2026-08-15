import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private router: Router) {}
  routes = ['home', 'info', 'service', 'summary'];

  currentIndex = 0;

  currentRoute = this.routes[0];

  next() {
    const currentUrl = this.router.url.replace('/', '');

    const currentIndex = this.routes.indexOf(currentUrl);

    if (currentIndex < this.routes.length - 1) {
      this.router.navigate([this.routes[currentIndex + 1]]);
    }
  }

  prev() {
    const currentUrl = this.router.url.replace('/', '');

    const currentIndex = this.routes.indexOf(currentUrl);

    if (currentIndex > 0) {
      this.router.navigate([this.routes[currentIndex - 1]]);
    }
  }
}

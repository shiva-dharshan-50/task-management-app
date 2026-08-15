import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomePage } from '../../layouts/main-layout/home-page/home-page';
import { InfoPage } from '../../layouts/main-layout/info-page/info-page';
import { ServicePage } from '../../layouts/main-layout/service-page/service-page';
import { SummayPage } from '../../layouts/main-layout/summay-page/summay-page';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  screens = [HomePage, InfoPage, ServicePage, SummayPage];
  currentIndex = 0;

  currentComponent$ = new BehaviorSubject(this.screens[0]);

  next() {
    if (this.currentIndex < this.screens.length - 1) {
      this.currentIndex++;

      this.currentComponent$.next(this.screens[this.currentIndex]);
    }
  }
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentComponent$.next(this.screens[this.currentIndex]);
    }
  }
}

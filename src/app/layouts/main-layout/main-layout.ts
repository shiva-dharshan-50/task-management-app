import { Component } from '@angular/core';
import { StepperService } from '../../shared/service/stepper.service';
import { RouterOutlet } from '@angular/router';
import { RouteService } from '../../shared/service/route.service';
import { Navbar } from '../../shared/components/navbar/navbar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  constructor(
    public stepperService: StepperService,
    public routeService: RouteService,
  ) {}

  screens = ['Home', 'Info', 'Service', 'Summary'];

  next() {
    this.routeService.next();
  }
  prev() {
    this.routeService.prev();
  }
}

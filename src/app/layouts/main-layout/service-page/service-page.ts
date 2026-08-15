import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ServiceChild } from './service-child/service-child';

@Component({
  selector: 'app-service-page',
  imports: [ServiceChild, DatePipe],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage implements OnInit, AfterViewInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChild('title') title!: ElementRef;

  welcomeText = '';

  time: number = 0;
  interval: any;
  name = 'Shiva';
  ngOnInit(): void {
    this.welcomeText = 'Welcome to Service!';
    this.interval = setInterval(() => {
      this.time++;
      this.cdr.detectChanges();
    }, 1000);
  }

  ngAfterViewInit(): void {
    console.log(this.title.nativeElement.innerText);
  }

  changeName() {
    this.name = 'Dharshan';
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}

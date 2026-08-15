import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-service-child',
  imports: [],
  templateUrl: './service-child.html',
  styleUrl: './service-child.css',
})
export class ServiceChild implements OnChanges {
  @Input() name: string = '';
  message = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && this.name !== undefined) {
      this.message = `The Name is ${this.name}`;
    }
  }
}

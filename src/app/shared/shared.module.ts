import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterOutlet],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterOutlet],
})
export class SharedModule {}

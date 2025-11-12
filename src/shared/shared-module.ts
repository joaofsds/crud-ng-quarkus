import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from './pipes/category-pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CategoryPipe,
  ],
  exports: [MatDialogModule, MatButtonModule, MatIconModule, CategoryPipe],
})
export class SharedModule {}

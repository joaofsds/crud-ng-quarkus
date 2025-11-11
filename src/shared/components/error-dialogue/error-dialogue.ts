import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialogue',
  imports: [MatDialogContent, MatDialogActions, MatButton],
  templateUrl: './error-dialogue.html',
  styleUrl: './error-dialogue.scss',
})
export class ErrorDialogue {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) {}
}

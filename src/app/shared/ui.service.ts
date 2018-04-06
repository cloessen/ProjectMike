import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {

  constructor(public snackBar: MatSnackBar) { }

  openSnackbar(message: string, duration: number) {
    this.snackBar.open(message, null, {
      duration: duration,
      verticalPosition: 'top'
    });
  }
}

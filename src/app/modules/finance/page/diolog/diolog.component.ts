import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-diolog',
  templateUrl: './diolog.component.html',
  styleUrls: [],
})
export class DiologComponent {

constructor(

  public dialogRef: MatDialogRef<DiologComponent>
){}

  cancel(): void {
    this.dialogRef.close();
  }
}

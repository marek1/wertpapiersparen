import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

  @Input() anzahl: number;
  @Input() smallestUnit: number;
  @Input() unit: string;
  @Output() numberChanged = new EventEmitter<number>();

  public editMode: boolean;

  constructor() {
  }

  ngOnInit() {
    this.editMode = false;
  }

  decrease() {
    this.anzahl = this.anzahl - this.smallestUnit;
  }

  increase() {
    this.anzahl = this.anzahl + this.smallestUnit;
  }

  changeNumber(event: any) {
    if (isNaN(parseInt(event.target.value, 10))) {
      return;
    }
    this.anzahl = parseInt(event.target.value, 10);
  }

  changeAnzahl() {
    this.numberChanged.emit(this.anzahl);
  }

}

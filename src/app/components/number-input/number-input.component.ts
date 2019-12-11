import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

  @Input() anzahl: number;
  @Input() smallestUnit: number;
  @Output() numberChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  decrease() {
    this.anzahl = this.anzahl - this.smallestUnit;
    this.numberChanged.emit(this.anzahl);
  }

  increase() {
    this.anzahl = this.anzahl + this.smallestUnit;
    this.numberChanged.emit(this.anzahl);
  }
}

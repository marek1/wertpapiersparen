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
  @Output() numberChanged = new EventEmitter<number>();

  // public AnzahlControl: FormControl;

  constructor() {
    // this.AnzahlControl = new FormControl();
  }

  ngOnInit() {
    // this.AnzahlControl.patchValue(this.anzahl);
    // this.AnzahlControl.valueChanges.subscribe((val) => {
    //   console.log('setting value : ', this.anzahl, ' ,,, val: ', val);
    //   if (val !== this.anzahl) {
    //     this.anzahl = val;
    //     this.numberChanged.emit(val);
    //   }
    // });
  }

  decrease() {
    this.anzahl = this.anzahl - this.smallestUnit;
    this.numberChanged.emit(this.anzahl);
  }

  increase() {
    this.anzahl = this.anzahl + this.smallestUnit;
    this.numberChanged.emit(this.anzahl);
  }

  changeAnzahl(event: any) {
    if (isNaN(parseInt(event.target.value, 10))) {
      return;
    }
    this.numberChanged.emit(parseInt(event.target.value, 10));
  }
}

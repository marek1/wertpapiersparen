import { Component, OnInit } from '@angular/core';
import { Country } from '../../../enums/country';
import { HelperService } from '../../../services/helpers';
import { Etf, Portion } from '../../../interfaces/etf';
import { Etfs } from '../../../data/etfs';

@Component({
  selector: 'app-etfs-by-region',
  templateUrl: './etfs-by-region.component.html',
  styleUrls: ['./etfs-by-region.component.scss']
})
export class EtfsByRegionComponent implements OnInit {

  public regions: string[];

  constructor(private helperService: HelperService) {
  }

  ngOnInit() {
    this.regions = this.helperService.EnumToArray(Country).sort((x, y) => {
      if (this.replaceUmlate(x.toString().toLowerCase()) < this.replaceUmlate(y.toString().toLowerCase())) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    });
  }

  private replaceUmlate(x: string) {
    return x.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
  }
}

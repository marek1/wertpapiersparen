import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../../services/helpers';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

@Component({
  selector: 'app-etfs-by-industry',
  templateUrl: './etfs-by-industry.component.html',
  styleUrls: ['./etfs-by-industry.component.scss']
})
export class EtfsByIndustryComponent implements OnInit {

  public industries: string[];

  constructor(private helperService: HelperService) {
  }

  ngOnInit() {
    this.industries = this.helperService.enumGetValues(IsharesIndustryNames).sort((x, y) => {
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

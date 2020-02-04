import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllRoutes, ROUTES_INVESTMENTFONDS, ROUTES_IN_AKTIEN_INVESTIEREN, ROUTES_RISIKO_INVESTITION, ROUTES_WAS_SIND_AKTIEN } from '../../routes';
import { content, HeadlineBodySource } from '../../data/content/content';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit {

  public currentRoute: string;
  public content: HeadlineBodySource|null;

  constructor(private router: ActivatedRoute) {
    this.currentRoute = this.router.snapshot.url[0].path;
    AllRoutes.map((route: string) => {
      console.log('route: ', route, this.currentRoute);
      if (route.toString().toLowerCase() === this.currentRoute.toString().toLowerCase()) {
        this.content = content.filter((x: HeadlineBodySource) => x.route === route)[0];
      }
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/constants';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public title: string = Constants.TITLE_SIDEBAR_COMPONENT;
  public searchCountryTitle: string = Constants.SEARCH_COUNTRY_TITLE;
  public searchRegionsTitle: string = Constants.SEARCH_REGIONS_TITLE;
  public searchCapitalsTitle: string = Constants.SEARCH_CAPITALS_TITLE;

  constructor() { }

  ngOnInit(): void {
  }

}

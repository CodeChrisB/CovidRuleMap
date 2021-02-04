import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import { Options } from 'highcharts';
import { DataService } from '../services/data.service';
// @ts-ignore
import sriLanka from '@highcharts/map-collection/custom/europe.geo.json';
import { Router } from '@angular/router';

// import sriLanka from '../../assets/lk-all.geo.json';

@Component({
  selector: 'EuropeMap',
  templateUrl: './europeMap.component.html',
  styleUrls: ['./europeMap.component.css'],
})
export class EuropeMapComponent implements OnInit {
  mapTitle = 'Our Europe Timeline';
  mapSubTitle = 'Project Europe';
  seriesName = 'Current Covid Cases';
  @Output() eventClicked = new EventEmitter<Event>();


  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = true;
  data = [
    ['ie', 1],
    ['is', 1],
    ['pt', 1],
    ['no', 1],
    ['se', 1],
    ['dk', 1],
    ['de', 1],
    ['nl', 1],
    ['be', 1],
    ['lu', 1],
    ['es', 1],
    ['fr', 1],
    ['pl', 1],
    ['cz', 1],
    ['at', 1],
    ['li', 1],
    ['sk', 1],
    ['hu', 1],
    ['si', 1],
    ['it', 1],
    ['sm', 1],
    ['hr', 1],
    ['ba', 1],
    ['yf', 1],
    ['me', 1],
    ['al', 1],
    ['mk', 1],
    ['fi', 1],
    ['ee', 1],
    ['lv', 1],
    ['lt', 1],
    ['by', 1],
    ['ua', 1],
    ['md', 1],
    ['ro', 1],
    ['bg', 1],
    ['gr', 1],
    ['cy', 1],
  ];


  notEu = ['ru']

  chartOptions: Options = {
    plotOptions: {
      series: {
        events: {
          click: (event: Event) => this.countryClick(event),
        },
      },
    },
    chart: {
      map: sriLanka as any,
      backgroundColor: '#4b96af'
    },
    title: {
      text: this.mapTitle,
    },
    subtitle: {
      text: this.mapSubTitle,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: false,
    },
    colorAxis: {
      min: 0,
      max: 0,
      minColor: '#ffffe0',
      maxColor: '#ffffe0',
    },
    series: [
      {
        type: 'map',
        name: this.seriesName,
        states: {
          hover: {
            color:'#dfffe0',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        data: this.data as any,
      },
    ],

    exporting: {
      enabled: true,
    },
  };

  constructor(private dataService: DataService, public route: Router) {}

  ngOnInit(): void {

  }

  countryClick(event) {
    //console.dir(event.target)
    //alert('click')
  }

  onPointSelect($event) {
    if($event.point ==undefined)
    return;

    var country = null;
    for (var key in $event.point.options) {
      if (country == null) country = $event.point.options[key];
    }

    if(country!='de')
    alert('please click on germany since its the only mocked one so far')
    //alert the other component about the country
    this.eventClicked.emit($event);
  }
}

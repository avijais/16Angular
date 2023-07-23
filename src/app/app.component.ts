import { Component } from '@angular/core';
// import * as Highcharts from 'Highcharts';
import * as Highcharts from 'highcharts';
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsOrganization from "highcharts/modules/organization";
import HighchartsExporting from "highcharts/modules/exporting";

HighchartsSankey(Highcharts);
HighchartsOrganization(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '16AngExamples';

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;

  orgChartOptions: Highcharts.Options = {
    chart: {
      inverted: true
    },
    title: {
      text: ''
    },
    series: [{
      type: 'organization',
      name: '',
      keys: ['from', 'to'],
      data: [
        { from: 'Shareholders', to: 'CEO' },
        { from: 'Board', to: 'CEO' },
        { from: 'CEO', to: 'CTO' },
        { from: 'CEO', to: 'CPO' }
      ],
      nodes: [
        {
          id: 'Shareholders'
        },
        {
          id: 'Board'
        },
        {
          id: 'CEO',
          title: 'CEO',
          name: 'Grethe Hjetland'
        },
        {
          id: 'CTO',
          title: 'CTO',
          name: 'Christer Vasseng'
        },
        {
          id: 'CPO',
          title: 'CPO',
          name: 'Torstein Hønsi'
        }
      ],
      levels: [{
          level: 0,
          color: 'silver',
          dataLabels: {
            color: 'black'
          }
        },
        {
          level: 1,
          color: 'silver',
          dataLabels: {
            color: 'black'
          }
        },
        {
          level: 2,
          dataLabels: {
            color: 'black'
          }
        }
      ],
      colorByPoint: false,
      color: '#007ad0',
      dataLabels: {
        color: 'white'
      },
      borderColor: 'white'
    }
  ]}

  // orgChartData = [1, 2, 3, 4];
  // orgChartOptions: Highcharts.Options = {
  //   series: [
  //     {
  //       type: 'line',
  //       data: this.orgChartData,
  //     },
  //   ],
  //   credits: {
  //     enabled: false
  //   }
  // };

  

  ineChartData = [1, 2, 3, 4];
  lineChartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: this.ineChartData,
      },
    ],
  };
}

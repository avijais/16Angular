import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsOrganization from "highcharts/modules/organization";
import HighchartsExporting from "highcharts/modules/exporting";

HighchartsSankey(Highcharts);
HighchartsOrganization(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {
  // Highcharts: typeof Highcharts = Highcharts;
  // updateFlag = false;

  // orgChartOptions2: Highcharts.Options = {
  //   chart: {
  //     height: 600,
  //     inverted: true
  //   },
  //   title: {
  //     text: 'Highcharts Org Chart'
  //   },
  //   accessibility: {
  //     point: {
  //       descriptionFormat: '{add index 1}. {toNode.name}' +
  //         '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' +
  //         'reports to {fromNode.id}'
  //     }
  //   },
  //   series: [{
  //     type: 'organization',
  //     name: 'Highsoft',
  //     keys: ['from', 'to'],
  //     data: [
  //       // ['Shareholders', 'Board'],
  //       // ['Board', 'CEO'],
  //       // ['CEO', 'CTO'],
  //       // ['CEO', 'CPO'],
  //       // ['CEO', 'CSO'],
  //       // ['CEO', 'HR'],
  //       // ['CTO', 'Product'],
  //       // ['CTO', 'Web'],
  //       // ['CSO', 'Sales'],
  //       // ['HR', 'Market'],
  //       // ['CSO', 'Market'],
  //       // ['HR', 'Market'],
  //       // ['CTO', 'Market']
  //     ],
  //     levels: [{
  //       level: 0,
  //       color: 'silver',
  //       dataLabels: {
  //         color: 'black'
  //       },
  //       // height: 25
  //     }, {
  //       level: 1,
  //       color: 'silver',
  //       dataLabels: {
  //         color: 'black'
  //       },
  //       // height: 25
  //     }, {
  //       level: 2,
  //       color: '#980104'
  //     }, {
  //       level: 4,
  //       color: '#359154'
  //     }],
  //     nodes: [{
  //       id: 'Shareholders'
  //     }, {
  //       id: 'Board'
  //     }, {
  //       id: 'CEO',
  //       title: 'CEO',
  //       name: 'Atle Sivertsen',
  //       image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg'
  //     }, {
  //       id: 'HR',
  //       title: '2',
  //       name: 'Republic',
  //       color: '#007ad0',
  //       image: 'https://thumbs.dreamstime.com/b/prague-czech-republic-september-pilot-airplane-vintage-livery-czech-airlines-airplane-prague-czech-republic-september-162148089.jpg?w=992'
  //     }, {
  //       id: 'CTO',
  //       title: '1',
  //       name: 'Delta',
  //       image: 'https://cdn.pixabay.com/photo/2021/12/02/05/32/airplane-6839673_640.jpg'
  //     }, {
  //       id: 'CPO',
  //       title: '2',
  //       name: 'Endeavor',
  //       image: 'https://cdn.pixabay.com/photo/2016/04/10/00/17/space-shuttle-1319210_640.jpg'
  //     }, {
  //       id: 'CSO',
  //       title: '3',
  //       name: 'SkyWest',
  //       image: 'https://thumbs.dreamstime.com/b/skywest-airlines-bombardier-crj-lr-los-angeles-california-usa-may-cl-b-lands-los-angeles-airport-lax-may-plane-has-54650449.jpg'
  //     }, {
  //       id: 'Product',
  //       name: 'Product developers'
  //     }, {
  //       id: 'Web',
  //       name: 'Web devs, sys admin'
  //     }, {
  //       id: 'Sales',
  //       name: 'Sales team'
  //     }, {
  //       id: 'Market',
  //       name: 'Marketing team',
  //       column: 5
  //     }],
  //     colorByPoint: false,
  //     color: '#007ad0',
  //     dataLabels: {
  //       color: 'white'
  //     },
  //     borderColor: 'white',
  //     nodeWidth: 65
  //   }],
  //   tooltip: {
  //     outside: true
  //   },
  //   exporting: {
  //     allowHTML: true,
  //     sourceWidth: 800,
  //     sourceHeight: 600
  //   }
  // };
}

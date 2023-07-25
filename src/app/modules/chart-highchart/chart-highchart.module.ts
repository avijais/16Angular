import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartHighChartRoutingModule } from './chart-highchart-routing.module';
import { OrganizationComponent } from './components/organization/organization.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
    declarations: [
        OrganizationComponent
    ],
    imports: [
        CommonModule,
        HighchartsChartModule,
        ChartHighChartRoutingModule
    ]
})
export class ChartHighchartModule { }

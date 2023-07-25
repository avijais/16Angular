import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const matExamplesModule = () => import('./modules/mat-examples/mat-examples-routing.module').then( m => m.MatExamplesRoutingModule );
// const chartHighChartModule = () => import('./modules/chart-highchart/chart-highchart-routing.module').then( m => m.ChartHighChartRoutingModule );

const routes: Routes = [
    { path: "", redirectTo: "/mat-examples", pathMatch: "full" },
    // {
    //     path: "high-charts",
    //     children: [
    //         { path: "org-chart", loadChildren: chartHighChartModule }
    //     ]
    // },
    {
        path: "",
        children: [
            { path: "mat-examples", loadChildren: matExamplesModule }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

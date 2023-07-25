import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardComponent } from './components/mat-card/mat-card.component';

const routes: Routes = [
    { path: "", component: MatCardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatExamplesRoutingModule { }

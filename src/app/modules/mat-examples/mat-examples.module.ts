import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { MatExamplesRoutingModule } from './mat-examples-routing.module';

@NgModule({
    declarations: [
        MatCardComponent
    ],
    imports: [
        CommonModule,
        MatExamplesRoutingModule
    ]
})
export class MatExamplesModule { }

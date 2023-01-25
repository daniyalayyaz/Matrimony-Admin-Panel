import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { PackageListComponent } from './package-list/package-list.component';
import { PackageFormComponent } from './package-list/package-form/package-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './promotion/promotion-list/promotion-list.component';
import { PackageEditComponent } from './package-list/package-edit/package-edit.component';
import { PromotionEditComponent } from './promotion/promotion-edit/promotion-edit.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        NgApexchartsModule,
        AngularResizedEventModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        Dashboard1Component,
        Dashboard2Component,
        PackageListComponent,
        PackageEditComponent,
        PackageFormComponent,        
        PromotionComponent,
        PromotionEditComponent,
        PromotionListComponent,
    ],
    providers: [],
})
export class DashboardModule { }

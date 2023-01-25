import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { PackageEditComponent } from './package-list/package-edit/package-edit.component';
import { PackageFormComponent } from './package-list/package-form/package-form.component';
import { PackageListComponent } from './package-list/package-list.component';
import { PromotionEditComponent } from './promotion/promotion-edit/promotion-edit.component';
import { PromotionListComponent } from './promotion/promotion-list/promotion-list.component';
import { PromotionComponent } from './promotion/promotion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1'
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'package',
        component: PackageListComponent,
        data: {
          title: 'Package'
        }
      },
      {
        path: 'packageForm',
        component: PackageFormComponent,
        data: {
          title: 'Package'
        }
      },
      {
        path: 'promotionForm',
        component: PromotionComponent,
        data: {
          title: 'Promotion'
        }
      },
      {
        path: 'promotion',
        component: PromotionListComponent,
        data: {
          title: 'PromotionList'
        }
      },
      {
        path: 'promotionEdit/:id',
        component: PromotionEditComponent,
        data: {
          title: 'PromotionEdit'
        }
      },
      {
        path:'packageEdit/:id',
        component: PackageEditComponent,
        data: {
          title: "PackageEdit"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

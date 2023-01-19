import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildEditComponent } from './build-edit/build-edit.component';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildComponent } from './build/build.component';
import { CastEditComponent } from './cast-edit/cast-edit.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { CastComponent } from './cast/cast.component';
import { ComplexionEditComponent } from './complexion-edit/complexion-edit.component';
import { ComplexionListComponent } from './complexion-list/complexion-list.component';
import { ComplexionComponent } from './complexion/complexion.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryComponent } from './country/country.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseComponent } from './house/house.component';
import { LooksEditComponent } from './looks-edit/looks-edit.component';
import { LooksListComponent } from './looks-list/looks-list.component';
import { LooksComponent } from './looks/looks.component';
import { MotherLanguageEditComponent } from './mother-language-edit/mother-language-edit.component';
import { MotherLanguageListComponent } from './mother-language-list/mother-language-list.component';
import { MotherLanguageComponent } from './mother-language/mother-language.component';
import { ProvinvcesEditComponent } from './provinvces-edit/provinvces-edit.component';
import { ProvinvcesListComponent } from './provinvces-list/provinvces-list.component';
import { ProvinvcesComponent } from './provinvces/provinvces.component';
import { ReligionEditComponent } from './religion-edit/religion-edit.component';
import { ReligionListComponent } from './religion-list/religion-list.component';
import { ReligionComponent } from './religion/religion.component';
import { SectEditComponent } from './sect-edit/sect-edit.component';
import { SectListComponent } from './sect-list/sect-list.component';
import { SectComponent } from './sect/sect.component';

const routes: Routes = [
  {path: 'religion',component: ReligionComponent,data: {title: 'Religion'}
  },
  {
    path: 'religion-list',component: ReligionListComponent,data: {title: 'Religion-List'}
  },
  {
    path: 'religion-edit/:id',component: ReligionEditComponent,data: {title: 'Religion-edit'}
  },
  {
    path: 'cast',component: CastComponent,data: {title: 'Cast'}
  },
  {
    path: 'cast-list',component: CastListComponent,data: {title: 'Cast-list'}
  },
  {
    path: 'cast-edit/:id',component: CastEditComponent,data: {title: 'Cast-edit'}
  },
  {
    path: 'complexion',component: ComplexionComponent,data: {title: 'Complexion'}
  },
  {
    path: 'complexion-list',component: ComplexionListComponent,data: {title: 'Complexion'}
  },
  {
    path: 'complexion-edit/:id',component: ComplexionEditComponent,data: {title: 'Complexion-edit'}
  },
  {
    path: 'looks',component: LooksComponent,data: {title: 'Looks'}
  },
  {
    path: 'looks-list',component: LooksListComponent,data: {title: 'Looks-list'}
  },
  {
    path: 'looks-edit/:id',component: LooksEditComponent,data: {title: 'Looks-edit'}
  },
  {
    path: 'sect',component: SectComponent,data: {title: 'Sect'}
  },
  {
    path: 'sect-list',component: SectListComponent,data: {title: 'Sect-list'}
  },
  {
    path: 'sect-edit/:id',component: SectEditComponent,data: {title: 'Sect-edit'}
  },
  {
    path: 'motherlanguage',component: MotherLanguageComponent,data: {title: 'Mother-language'}
  },
  {
    path: 'motherlanguage-list',component: MotherLanguageListComponent,data: {title: 'Mother-language-list'}
  },
  {
    path: 'motherlanguage-edit/:id',component: MotherLanguageEditComponent,data: {title: 'Mother-language-edit'}
  },
  {
    path: 'build',component: BuildComponent,data: {title: 'Build'}
  },
  {
    path: 'build-list',component: BuildListComponent,data: {title: 'Build-list'}
  },
  {
    path: 'build-edit/:id',component: BuildEditComponent,data: {title: 'Build-edit'}
  },
  {
    path: 'house',component: HouseComponent,data: {title: 'House'}
  },
  {
    path: 'house-list',component: HouseListComponent,data: {title: 'House-list'}
  },
  {
    path: 'house-edit/:id',component: HouseEditComponent,data: {title: 'House-edit'}
  },
  {
    path: 'country',component:CountryComponent,data: {title: 'Country'}
  },
  {
    path: 'country-list',component:CountryListComponent,data: {title: 'Country-list'}
  },
  {
    path: 'country-edit/:id',component:CountryEditComponent,data: {title: 'Country-edit'}
  },
  {
    path: 'provinvces',component:ProvinvcesComponent,data: {title: 'Provinvces'}
  },
  {
    path: 'provinvces-list',component:ProvinvcesListComponent,data: {title: 'Provinvces-list'}
  },
  {
    path: 'provinvces-edit/:id',component:ProvinvcesEditComponent,data: {title: 'Provinvces-edit'}
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }

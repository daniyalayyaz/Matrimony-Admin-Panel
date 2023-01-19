import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { ReligionComponent } from './religion/religion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotherLanguageComponent } from './mother-language/mother-language.component';
import { CastComponent } from './cast/cast.component';
import { SectComponent } from './sect/sect.component';
import { LooksComponent } from './looks/looks.component';
import { ComplexionComponent } from './complexion/complexion.component';
import { BuildComponent } from './build/build.component';
import { HouseComponent } from './house/house.component';
import { CountryComponent } from './country/country.component';
import { ProvinvcesComponent } from './provinvces/provinvces.component';
import { ReligionListComponent } from './religion-list/religion-list.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { ComplexionListComponent } from './complexion-list/complexion-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HouseListComponent } from './house-list/house-list.component';
import { LooksListComponent } from './looks-list/looks-list.component';
import { MotherLanguageListComponent } from './mother-language-list/mother-language-list.component';
import { ProvinvcesListComponent } from './provinvces-list/provinvces-list.component';
import { BuildListComponent } from './build-list/build-list.component';
import { SectListComponent } from './sect-list/sect-list.component';
import { BuildEditComponent } from './build-edit/build-edit.component';
import { CastEditComponent } from './cast-edit/cast-edit.component';
import { ComplexionEditComponent } from './complexion-edit/complexion-edit.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { LooksEditComponent } from './looks-edit/looks-edit.component';
import { MotherLanguageEditComponent } from './mother-language-edit/mother-language-edit.component';
import { ProvinvcesEditComponent } from './provinvces-edit/provinvces-edit.component';
import { ReligionEditComponent } from './religion-edit/religion-edit.component';
import { SectEditComponent } from './sect-edit/sect-edit.component';

@NgModule({
  declarations: [
    ReligionComponent,
    MotherLanguageComponent,
    CastComponent,
    SectComponent,
    LooksComponent,
    ComplexionComponent,
    BuildComponent,
    HouseComponent,
    CountryComponent,
    ProvinvcesComponent,
    ReligionListComponent,
    CastListComponent,
    ComplexionListComponent,
    CountryListComponent,
    HouseListComponent,
    LooksListComponent,
    MotherLanguageListComponent,
    ProvinvcesListComponent,
    BuildListComponent,
    SectListComponent,
    BuildEditComponent,
    CastEditComponent,
    ComplexionEditComponent,
    CountryEditComponent,
    HouseEditComponent,
    LooksEditComponent,
    MotherLanguageEditComponent,
    ProvinvcesEditComponent,
    ReligionEditComponent,
    SectEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }

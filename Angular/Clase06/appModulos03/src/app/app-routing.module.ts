import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from "app/nucleo/login/login.component";
import { HomeComponent } from "app/nucleo/home/home.component";
import { PreloadAllModules } from "@angular/router";


const rutas: Routes = [
    {path: "", component: LoginComponent, pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "departamentos", loadChildren: "./departamentos/departamentos.module#DepartamentosModule"},
    {path: "locales", loadChildren: "./locales/locales.module#LocalesModule"}
  ]

@NgModule({
 declarations: [
 ],
 imports: [
     RouterModule.forRoot(rutas, {preloadingStrategy: PreloadAllModules})
 ],
 exports: [
     RouterModule
 ]
})
export class AppRouting {}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManejoGripaComponent } from './manejo-gripa/manejo-gripa.component';
import { TermometroComponent } from './termometro/termometro.component';
import { PulsoOximetroComponent } from './pulso-oximetro/pulso-oximetro.component';
import { PrevensionContagioCovidComponent } from './prevension-contagio-covid/prevension-contagio-covid.component';
import { TapabocasComponent } from './tapabocas/tapabocas.component';
import { GelBactrianoComponent } from './gel-bactriano/gel-bactriano.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [ManejoGripaComponent, TermometroComponent, PulsoOximetroComponent, PrevensionContagioCovidComponent, TapabocasComponent, GelBactrianoComponent, InicioComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

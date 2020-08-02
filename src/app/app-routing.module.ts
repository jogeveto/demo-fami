import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ManejoGripaComponent } from './pages/manejo-gripa/manejo-gripa.component';
import { TermometroComponent } from './pages/termometro/termometro.component';
import { PulsoOximetroComponent } from './pages/pulso-oximetro/pulso-oximetro.component';
import { PrevensionContagioCovidComponent } from './pages/prevension-contagio-covid/prevension-contagio-covid.component';
import { TapabocasComponent } from './pages/tapabocas/tapabocas.component';
import { GelBactrianoComponent } from './pages/gel-bactriano/gel-bactriano.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'manejo-gripa', component: ManejoGripaComponent },
  { path: 'termometro', component: TermometroComponent },
  { path: 'pulso-oximetro', component: PulsoOximetroComponent },
  { path: 'prevencion-contagio-covid', component: PrevensionContagioCovidComponent },
  { path: 'tapabocas', component: TapabocasComponent },
  { path: 'gel-bacteriano', component: GelBactrianoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

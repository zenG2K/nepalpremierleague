import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', pathMatch:'full', loadComponent:()=>import('./pages/home/home.component').then(comp=>comp.HomeComponent)},
    {path:'live', loadComponent:()=>import('./pages/live-stream/live-stream.component').then(comp=>comp.LiveStreamComponent)},
    {path:'teams', loadChildren:()=>import('./pages/team/team.module').then(mod=>mod.TeamModule)}
];

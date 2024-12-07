import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', loadComponent:()=>import('./team-list/team-list.component').then(comp=>comp.TeamListComponent),
    children:[
      {path:'players', loadComponent:()=>import('./player-list/player-list.component').then((comp)=>comp.PlayerListComponent)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }

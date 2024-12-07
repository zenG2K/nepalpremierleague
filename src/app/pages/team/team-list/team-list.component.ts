import { Component, computed, inject, input, signal } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { PlayerListComponent } from "../player-list/player-list.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team-list',
  imports: [PlayerListComponent],
  template: `
   <div class="grid grid-cols-[30%__70%] w-full gap-1 px-2 py-2">
    
   <!-- Teamd -->
  <div class=" col-span-1">
    @for (team of teams(); track team.teamId) {
      <div class="w-full shadow-md rounded-md px-1 py-2 flex flex-col gap-1 hover:opacity-70 hover:cursor-pointer" (click)="getTeam(team)">
        <span>{{team.teamName}}</span>
    </div>
    }
   

  </div>
  
  <!-- players router outelet -->
  <div class="col-span-1">
    <app-player-list [players]="selectedTeamPlayers" />
  </div>
</div>

  `,
  styles: ``
})
export class TeamListComponent {

  teams = signal<any>([])
  api = inject(ApiService)
  selectedTeamPlayers:any[]=[]

  ngOnInit(){
   this.getTeamList()
  }

  getTeamList(){
    this.api.getTeams().subscribe({
      next:(res)=>{
        this.teams.set(res)
      },
      error:(err)=>{
       this.teams.set(err)
      }
    })
  }

  getTeam(team:any){
    this.selectedTeamPlayers= team.players
  }
}

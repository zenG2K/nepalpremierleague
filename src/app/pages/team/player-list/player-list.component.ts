import { Component, input } from '@angular/core';

@Component({
  selector: 'app-player-list',
  imports: [],
  template: `
  <div class="flex flex-col gap-2 h-[60vh] overflow-auto">
  @for (player of players(); track $index) {
      <div class="px-2 py-2 shadow-sm rounded ">
        <span>{{player.playerName}}</span>
      </div>
    }
  </div>
    
  `,
  styles: ``
})
export class PlayerListComponent {
  players:any = input.required<any>()
}

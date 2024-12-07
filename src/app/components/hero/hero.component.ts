import { Component } from '@angular/core';
import { LiveMatchComponent } from "../live-match/live-match.component";

@Component({
  selector: 'app-hero',
  imports: [LiveMatchComponent],
  template: `
    <div class=" bg-gray-100 shadow-md px-4 py-1 text-xl border flex flex-col gap-1 justify-center rounded-xl w-full">
      <div class=" bg-gray-200 w-full flex justify-center text-sm font-semibold h-[8vh] rounded-lg items-center">
        <span>Watch Nepal Premier League Live !!!</span>
      </div>
      <div class="flex justify-center items-center">
       <app-live-match />
      </div>
      
    </div>
  `,
  styles: ``
})
export class HeroComponent {

}

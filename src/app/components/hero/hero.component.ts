import { Component } from '@angular/core';
import { LiveMatchComponent } from "../live-match/live-match.component";

@Component({
  selector: 'app-hero',
  imports: [LiveMatchComponent],
  template: `
    <div class=" bg-gray-100 shadow-md px-4 py-1 text-xl border flex justify-center rounded-xl w-full">
      <app-live-match />
    </div>
  `,
  styles: ``
})
export class HeroComponent {

}

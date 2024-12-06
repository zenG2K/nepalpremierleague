import { Component} from '@angular/core';

import { HeroComponent } from "../../components/hero/hero.component";
import { PollListComponent } from "../../components/poll-list/poll-list.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, PollListComponent],
  template: `
  <app-hero />
  <app-poll-list />

  `,
  styles: ``
})
export class HomeComponent {

  

}

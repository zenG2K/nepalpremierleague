import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, HomeComponent],
  template: `
    <app-header />
    <app-home />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'NepalPremierLegaue';
}

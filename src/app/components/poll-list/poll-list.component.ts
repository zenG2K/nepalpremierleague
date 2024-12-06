import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { isPlatformServer } from '@angular/common';
import { PollCardComponent } from '../poll-card/poll-card.component';

@Component({
  selector: 'app-poll-list',
  imports: [PollCardComponent],
  template: `
   <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 py-2">
   @for (poll of polls(); track $index) {
     <app-poll-card [poll]="poll" />
    }
   </div>
   
  `,
  styles: ``
})
export class PollListComponent {

  platformid = inject(PLATFORM_ID)
  api_service = inject(ApiService)
  polls = signal<any[]>([])

  ngOnInit() {
    this.fetchPolls()
  }

  fetchPolls() {

    const isServer = isPlatformServer(this.platformid);
    if (!isServer) {
      this.api_service.getPolls().subscribe({
        next: (res:any | any[]) => {
          this.polls.set(res)
        }
      })
    }
  }

}

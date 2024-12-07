import { Component, signal } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-live-stream',
  imports: [YouTubePlayer],
  template: `
  <div class="flex justify-center items-center px-2 py-8 shadow-sm rounded-sm ">
  <youtube-player [videoId]="video_id()" />
  </div>
    
  `,
  styles: ``
})
export class LiveStreamComponent {
  video_id = signal<string>('43k76k_u9tE')
}

import { isPlatformBrowser, isPlatformServer, JsonPipe } from '@angular/common';
import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-live-match',
  imports: [],
  template: `
    
   <div class=" bg-gray-200 px-4 rounded-lg flex flex-col gap-1 h-auto py-2 ">
     
    <!--top  -->
      <div class="flex flex-col w-full text-sm ">
        <div class="inline-flex gap-3 mt-2">
        <span class=" bg-red-200 text-black px-1 rounded-md ">Live</span>
        <span>|</span>
        <span class=" text-sm text-black">{{liveMatch().title}}</span>
        </div>
        <hr class=" border-gray-600 mt-1">
      
      </div>

      <!-- center -->
      <div class="flex flex-col">
        
        <!-- Location & mactch -->
          <div class=" inline-flex gap-3 text-black text-sm">
            <span>NPL</span>
            <span>|</span>
            <img src="/pin.png" alt="Location" class=" w-[20px] h-[20px] rounded-full object-contain">
            <span>{{liveMatch().location}}</span>
          </div>

          <!-- Team A|B Score -->
          <div class="flex flex-col gap-1">

          <!-- Team A -->
              <div class=" inline-flex justify-between items-center gap-3">
                <div class="flex gap-1 items-center">
                  <img src="/team-a.png" alt="Team" class=" w-[30px] h-[30px] rounded-full object-contain">
                  <span class="font-medium text-sm">{{liveMatch().teamA}}</span>
                </div>
                <div class="text-sm font-bold text-green-700" >{{liveMatch().teamAScore}}</div>
              </div>

              <!-- Team B -->
              <div class=" inline-flex justify-between items-center gap-3">
                <div class="flex  gap-1 items-center">
                  <img src="/team-b.png" alt="Team" class=" w-[30px] h-[30px] rounded-full object-contain">
                  <span class=" font-medium text-sm">{{liveMatch().teamB}}</span>
                </div>
                <div class="text-sm font-bold text-green-700">{{liveMatch().teamBScore}}</div>
              </div>

          </div>
        
      </div>

      <!-- buttom -->

      <div class="text-black font-mono text-sm flex flex-col gap-1">
        <div class="flex justify-center border shadow-md rounded-xl bg-slate-200">
          <span>{{liveMatch().comment}}</span>
        </div>
       

        <div class="flex gap-1 mt-1 items-center">
           <img src="/user.png" alt="User" class=" w-[20px] h-[20px] rounded-full object-contain">
          <span>{{liveMatch().player}}</span>
          <span>{{liveMatch().entitle}}</span>
        </div>
      </div>

   </div>
  `,
  styles: ``
})
export class LiveMatchComponent {
  platformid = inject(PLATFORM_ID)
  api_service = inject(ApiService)
  liveMatch = signal<any>({})

  ngOnInit() {
    this.loadLiveMatch()
  }

  loadLiveMatch() {
    const isServer = isPlatformServer(this.platformid);
    if (!isServer) {
      this.api_service.getLiveMatch().subscribe({
        next: (res) => {
          this.liveMatch.set(res)
        },
        error: (err) => {
          this.liveMatch.set(err)
        }
      })
    }
  }

}

import { isPlatformServer, JsonPipe, PercentPipe } from '@angular/common';
import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-poll-card',
  imports: [PercentPipe],
  template: `
    <div class="w-full shadow-md px-1 py-1 rounded-md flex flex-col gap-1 h-[25vh] overflow-auto">
    
    <!-- Question | Poll Icon -->
      <div class=" mx-auto inline-flex gap-2 text-sm font-semibold items-center justify-start w-full">
        <span>{{poll().pollTitle}}</span>
      </div>

      @for (question of poll().options; track $index) {

          <!-- question | probability | yes-no button -->
          <div class="w-full flex  gap-1 bg-gray-50">

        <!-- Question -->
            <div class=" w-2/3  px-1">
              <span>{{question.question}}</span>
            </div>

          <!-- probability | yesno -->

            <div class=" w-1/2 inline-flex gap-1 px-1">
              <span class=" w-1/2">{{getYesPercent(question) | percent:'1.2-2'}} </span>

              <div class=" w-1/2 inline-flex gap-1 justify-between">
              <button class="px-2 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 " 
              (click)="updatePoll(question.optionId,'yes')"
              >Yes</button>
              <button class="px-2 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 "
              (click)="updatePoll(question.optionId,'no')"
              >No</button>
              </div>

            </div>


        </div>

      }

      
      
     

    </div>
  `,
  styles: ``
})
export class PollCardComponent {
  poll: any = input.required()

  platformid = inject(PLATFORM_ID)
  api = inject(ApiService)

  getYesPercent(poll_option: any) {
   let total = poll_option.yesCount+poll_option.noCount;
    return (poll_option.yesCount/total);
  }
  

  updatePoll(option_id:number, selection:string){
    
   const isServer = isPlatformServer(this.platformid);
   if(!isServer){
      this.api.updatePoll(option_id, selection).subscribe({
        next:(updatedOption)=>{
          let option = this.poll()?.options?.find(
            (opt: any) => opt.optionId === updatedOption.optionId
          );
  
          // Update the option counts based on the updatedOption data
          if (option) {
            option.yesCount = updatedOption.yesCount;
            option.noCount = updatedOption.noCount;
            option.neutralCount = updatedOption.neutralCount;
          }
        }
      })
   }
  }
  
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div class=" bg-slate-300 shadow-2xl px-4 py-3 text-xl border rounded-md flex gap-1 items-center justify-between">

    <!-- Logo && NPL -->
      <div class="flex  gap-3 items-center">
        <img src="/logo.webp" alt="Logo" class=" w-[50px] h-[50px] rounded-full object-contain hover:opacity-90" routerLink="/">
       <h2 class=" text-black font-sans font-semibold ">NPL</h2>
      </div>

      <div class="flex gap-2 items-center justify-center w-2/3">         
      <a routerLink="teams" class="text-white bg-blue-700 px-1 py-1 text-sm rounded-sm">Teams</a>

      </div>

      <!-- Right End -->
      <div class="flex-1 w-full  flex justify-end px-2 items-center">
        <span routerLink="live" class="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer" >Live</span>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

}

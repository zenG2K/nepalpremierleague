import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class=" bg-slate-300 shadow-2xl px-4 py-3 text-xl border rounded-md">
      <div class="flex  gap-3 items-center">
        <img src="/logo.webp" alt="Logo" class=" w-[50px] h-[50px] rounded-full object-contain">
      <h2 class=" text-black font-sans font-semibold ">Nepal Premier League</h2>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

}

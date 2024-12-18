import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { basename } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)
  url ='https://api.watchnpl.live/api/v1/'

  constructor() { }

  getLiveMatch(){
    return this.http.get(this.url+'live-match/2')
  }

  getPolls(){
    return this.http.get(this.url+'polls')
  }
  updatePoll(optionId: number, selection:string){
    return this.http.put<any>(this.url+`update-poll/${optionId}/${selection}`,{})
  }
  getTeams() {
    return this.http.get<any>(this.url + `teams`)
  }
}

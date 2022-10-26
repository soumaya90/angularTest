import { Injectable } from '@angular/core';
import { Agent} from '../model/agent.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';

@Injectable({
  providedIn: 'root'
})

export class AgentService {

  constructor(private http : HttpClient) { }

  totalAgent(): Observable<number>{
    return this.http.get<number>(`${apiURL}/total`);
  }

  totalActive(): Observable<number>{
    return this.http.get<number>(`${apiURL}/totalActive`);
  }

  totalDisconnected(): Observable<number>{
    return this.http.get<number>(`${apiURL}/totalDisconnect`);
  }

  totalPending():Observable<number>{
    return this.http.get<number>(`${apiURL}/totalPending`);
  }

  totalNeverConnected():Observable<number>{
    return this.http.get<number>(`${apiURL}/neverConnected`);
  }

}

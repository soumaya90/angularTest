import { Component, OnInit } from '@angular/core';
import { AgentService } from './../../service/agent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private agentservice : AgentService) { }

   total !: number ;


   totalAct !: number
   totalDisc !: number
   totalP !: number
   totalN !: number

  ngOnInit(): void {
    this.totalAgents();
    this.totalActive();
    this.totalDisconnected();
    this.totalPending();
    this.totalNeverConnected();
  }


  //Nombre total des agents
  totalAgents(){
    this.agentservice.totalAgent().subscribe(sum=>{
      console.log(sum+"_leNombre total des agents")
      this.total=sum ;
    });
 }


  //Nombre total des agent activs
  totalActive(){
    this.agentservice.totalActive().subscribe(sum=>{
      console.log(sum+ "_leNombre des agents active")
      this.totalAct=sum ;
    });

  }

  //Nombre total des agents déconnectés
  totalDisconnected(){
    this.agentservice.totalDisconnected().subscribe(sum=>{
      console.log(sum+ "_leNombre des agents déconnectés")
      this.totalDisc =sum ;
    });
 }


 //Nombre total pending
 totalPending(){
  this.agentservice.totalPending().subscribe(sum=>{
    console.log(sum+ "_leNombre des agents pending")
    this.totalP=sum ;
  });
}


 //Nombre total never connected
 totalNeverConnected(){
  this.agentservice.totalNeverConnected().subscribe(sum=>{
    console.log(sum+ "_leNombre des agents neverConnected")
    this.totalN=sum ;
  });
}

}

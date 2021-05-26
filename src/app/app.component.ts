import {Component, OnInit} from '@angular/core';
import {WondersService} from "./services/wonders.service";
import {Wonder} from "./Wonder";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  sevenWonders?:Wonder[]

  constructor(private wonderService:WondersService) { }

  ngOnInit(): void {
    this.setSevenWontersOfTheWorld()
  }

  setSevenWontersOfTheWorld():void{
    this.wonderService.getSevenWondersOfTheWorld()
      .subscribe(wonders=>this.sevenWonders=wonders)
  }
}

import { Component, OnInit,Input } from '@angular/core';
import {Wonder} from "../Wonder";
import {WondersService} from "../services/wonders.service";


@Component({
  selector: 'app-wonder',
  templateUrl: './wonder.component.html',
  styleUrls: ['./wonder.component.css']
})
export class WonderComponent implements OnInit {

  @Input()wonder?:Wonder

  ngOnInit(): void {
  }

}

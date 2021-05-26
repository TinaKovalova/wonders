import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {Wonder} from "../Wonder";
import {WONDERS} from "../WONDERS";


@Injectable({
  providedIn: 'root'
})
export class WondersService {

  getSevenWondersOfTheWorld():Observable<Wonder[]>{
    return of(WONDERS)
  }
}

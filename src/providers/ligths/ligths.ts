import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface Place {
  id_place: number,
  place: string,
  lights: Light[]
}

export interface Light {
  on: boolean,
  name: string,
  auto_off: boolean,
  timeEnds: string,
  auto_on: boolean,
  id_light: number,
  timeStarts: string
}

@Injectable()
export class LigthsProvider {

  constructor(
    public http: HttpClient
  ) {}

  getLights() {
    return this.http.get('http://localhost:5000/api/lights')
  }

  setStatus(data) {
    return new Promise((resolve => {
      const { idplace, idLight } = data
      this.http.get(`http://localhost:5000/api/lights/${idplace}/${idLight}`)
        .subscribe(data => {resolve()})
    }))
  }
}

import { Injectable } from "@angular/core";

@Injectable()
export class MyserviceService {
  constructor() {}
  showDate() {
    return new Date();
  }
}

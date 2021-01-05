import { Component, OnInit } from "@angular/core";
import { MyserviceService } from "../myservice.service";

@Component({
  selector: "app-other",
  templateUrl: "./other.component.html",
  styleUrls: ["./other.component.css"]
})
export class OtherComponent implements OnInit {
  mydata;
  constructor(private ser: MyserviceService) {}

  ngOnInit() {
    this.mydata = this.ser.showDate();
  }

  mymethod() {
    console.log(this.mydata);
  }
}

import { Component, Input, OnInit, VERSION } from "@angular/core";
import { MyserviceService } from "./myservice.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  mydata;

  constructor(private myser: MyserviceService) {}

  ngOnInit(): void {
    this.mydata = this.myser.showDate();
  }

  hello() {
    console.log(this.mydata);
  }
}

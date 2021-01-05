import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { OtherComponent } from "./other/other.component";
import { MyRoute } from "./myroute";
import { MyserviceService } from './myservice.service';

@NgModule({
  imports: [BrowserModule, FormsModule, MyRoute],
  declarations: [AppComponent, HelloComponent, OtherComponent],
  bootstrap: [AppComponent],
  providers: [MyserviceService]
})
export class AppModule {}

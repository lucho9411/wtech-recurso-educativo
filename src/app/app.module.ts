import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app.routes";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { AppMainComponent } from "./app-main.component";

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

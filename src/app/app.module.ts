import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculosserviceService } from './veiculosservice.service';
@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ VeiculosserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

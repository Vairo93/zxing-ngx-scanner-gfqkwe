import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppUiModule } from './app-ui.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [

    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    // Local
    AppUiModule,

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

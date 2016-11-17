import { NgModule,  } from '@angular/core'
import {  } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent, TrackDirective, TrackingService } from './app.component'

const imports = [BrowserModule]
const bootstrap = [AppComponent]
const declarations = [
    AppComponent,
    TrackDirective
]
const providers = [
    TrackingService
]

@NgModule({
    imports,
    declarations,
    bootstrap,
    providers
})
export class AppModule {}
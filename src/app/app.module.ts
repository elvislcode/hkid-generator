import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HkidGenerator } from './components/hkid-generator/hkid-generator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HkidPipe } from './pipes/hkid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HkidGenerator,
    HkidPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

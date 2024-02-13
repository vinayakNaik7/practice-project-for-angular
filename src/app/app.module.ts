import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserAuthModule} from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component'
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule } from '@angular/material/badge';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './ditectives/red-el.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    Child1Component,
    UsdInrPipe,
    RedElDirective,
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

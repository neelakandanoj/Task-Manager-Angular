import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DataBindingComponent,
    DirectivesComponent,
    PageNotFoundComponent,
    LifeCycleHooksComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

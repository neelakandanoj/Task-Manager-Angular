import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';

const routes: Routes = [
  {path:"",component:UserComponent},
  {path:"",redirectTo:'/',pathMatch:'full'},
  {path:"user",component:UserComponent},
  {path:"Directives/2",component:DirectivesComponent},
  {path:"data-binding/new",component:DataBindingComponent},
  {path:"life-cycle",component:LifeCycleHooksComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { BemutatoComponent } from './bemutato/bemutato.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'bemutato', component: BemutatoComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

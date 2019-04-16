import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "app-users-list", component: UsersListComponent },
  { path: "app-welcome", component: WelcomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

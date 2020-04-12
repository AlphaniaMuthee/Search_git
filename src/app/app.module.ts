import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormComponent } from './form/form.component';
import { RouteComponent } from './route/route.component';
import { ValidityComponent } from './validity/validity.component';
import { RepositoryComponent } from './repository/repository.component';
import { CountPipe } from './count.pipe';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    UserprofileComponent,
    FormComponent,
    RouteComponent,
    ValidityComponent,
    RepositoryComponent,
    CountPipe,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

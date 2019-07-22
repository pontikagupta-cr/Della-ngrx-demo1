import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberDetailsComponent } from './components/member-details/member-details/member-details.component';
import { MembersComponent } from './components/members/members.component';
import { MemberComponent } from './containers/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberDetailsComponent,
    MembersComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

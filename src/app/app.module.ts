import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestComponent } from './test/test.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonComponent } from './person/person.component';
import { TermineComponent } from './termine/termine.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './shared/auth.service';
import { UIService } from './shared/ui.service';
import { PostsService } from './shared/posts.service';

import { registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ContentfulService } from './contentful.service';
import { MdToHtmlPipe } from './md-to-html.pipe';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TestComponent,
    PersonComponent,
    TermineComponent,
    NewsComponent,
    LoginComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, UIService, PostsService, ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }

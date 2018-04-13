import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestComponent } from './test/test.component';
import { TermineComponent } from './termine/termine.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { AdminOverviewComponent } from './admin/overview/admin-overview.component';
import { AdminPostComponent } from './admin/post/admin-post.component';
import { AdminTerminComponent } from './admin/termin/admin-termin.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'termine',
    component: TermineComponent
  },
  {
    path: 'post-detail',
    component: PostDetailComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

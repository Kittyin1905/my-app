import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ChartNationalComponent } from './chart-national/chart-national.component';
import { ChartDrugsComponent } from './chart-drugs/chart-drugs.component';
import { CharTemporalComponent } from './char-temporal/char-temporal.component';
import { ChartSitesComponent } from './chart-sites/chart-sites.component';
import { ChartStateComponent } from './chart-state/chart-state.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    HeroFormComponent,
    ChartNationalComponent,
    ChartDrugsComponent,
    CharTemporalComponent,
    ChartSitesComponent,
    ChartStateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: LoginComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: 'chart-national', component: ChartNationalComponent},
      {path: 'chart-drugs', component: ChartDrugsComponent},
      {path: 'chart-temporal', component: CharTemporalComponent},
      {path: 'chart-sites', component: ChartSitesComponent},
      {path: 'chart-state', component: ChartStateComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

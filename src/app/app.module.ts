import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxfilterPipe } from './checkboxfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DashboardComponent,
    FilterSectionComponent,
    AddPostComponent,
    PostDetailsComponent,
    FilterPipe,
    CheckboxfilterPipe,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

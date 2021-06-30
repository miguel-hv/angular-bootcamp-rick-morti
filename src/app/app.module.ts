import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavouritePageComponent } from './pages/favourite-page/favourite-page.component';
import { LocationsGalleryComponent } from './shared/components/locations-gallery/locations-gallery.component';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { ObservablesPageComponent } from './pages/observables-page/observables-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharactersPageComponent,
    MenuComponent,
    GalleryComponent,
    ContactPageComponent,
    FavouritePageComponent,
    LocationsPageComponent,
    LocationsGalleryComponent,
    CharactersDetailComponent,
    ObservablesPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

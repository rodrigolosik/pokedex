import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { DataService } from './services/data.service';
import { CacheService } from './services/cache.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyFilterPipe } from './utils/filter.pipe';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { FramePageComponent } from './pages/frame-page/frame-page.component';
import { PokemonListCardComponent } from './components/pokemon-list-card/pokemon-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PokemonListPageComponent,
    MyFilterPipe,
    PokemonDetailPageComponent,
    FramePageComponent,
    PokemonListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DataService, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }

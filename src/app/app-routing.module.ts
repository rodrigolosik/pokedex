import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/frame-page/frame-page.component';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: '', component: PokemonListPageComponent},
      {path: 'pokemon/:id', component: PokemonDetailPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

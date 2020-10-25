import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LongMediaViewComponent} from '../media-view-components/long-media-view/long-media-view.component';
import {ShortMediaViewComponent} from '../media-view-components/short-media-view/short-media-view.component';

const routes: Routes = [
  {path: 'long-media-view', component: LongMediaViewComponent},
  {path: 'short-media-view', component: ShortMediaViewComponent},
  {
    path: '',
    redirectTo: '/long-media-view',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

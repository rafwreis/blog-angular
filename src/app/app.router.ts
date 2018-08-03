import { Routes , RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { ErrorNotFoundPageComponent } from './pages/error-not-found-page/error-not-found-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AppGuard } from './app.guard';

const routes : Routes = [
    // home
    {
        path: '',
        component : HomePageComponent,
        canActivate: [AppGuard]
    },
    // blog post
    {
        path: ':slug/:id',
        component : PostPageComponent
    },
    // about
    {
        path: 'about',
        component : AboutPageComponent
    },
    // handling 404
    {
        path : '**', 
        component : ErrorNotFoundPageComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);


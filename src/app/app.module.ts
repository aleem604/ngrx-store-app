import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";

import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";


const routes: Routes = [
    {
        path: 'courses',
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
        canActivate: [],
    },
    {
        path: "**",
        redirectTo: '/'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        AuthModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/SharedModule';
import {HeaderComponent} from './header/header.component';
import {HeaderToolbarComponent} from './header-toolbar/header-toolbar.component';
import {HeaderSectionComponent} from './header-section/header-section.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderBreadcrumbsComponent} from './header-breadcrumbs/header-breadcrumbs.component';
import {HeaderToolbarItemComponent} from './header-toolbar/header-toolbar-item.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {CakesComponent} from './cakes/cakes.component';
import {DataTableComponent} from './_lib/DataTableComponent';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {CakesService} from './_lib/cakes.service';
import {HttpClientModule} from '@angular/common/http';
import {CakesManageComponent} from './cakes-manage/cakes-manage.component';
import {CakesCreateComponent} from './cakes-create/cakes-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [

        AppComponent,
        DataTableComponent,
        HeaderComponent,
        HeaderToolbarComponent,
        HeaderSectionComponent,
        FooterComponent,
        HeaderBreadcrumbsComponent,
        HeaderToolbarItemComponent,
        DashboardComponent,
        SettingsComponent,
        CakesComponent,
        CakesManageComponent,
        CakesCreateComponent

    ],
    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        NgxDatatableModule,
        HttpClientModule,
        ReactiveFormsModule,

        RouterModule.forRoot([{

            path: 'dashboard',
            component: DashboardComponent

        }, {

            path: 'cakes',
            component: CakesComponent

        }, {

            path: 'cakes/create',
            component: CakesManageComponent

        }, {

            path: 'cakes/:cakeId',
            component: CakesManageComponent

        }, {

            path: 'settings',
            component: SettingsComponent

        }, {

            path: '',
            pathMatch: 'full',
            redirectTo: '/dashboard'

        }])

    ],
    providers: [
        CakesService
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule {
}

import { Component, Injector, ModuleWithProviders, NgModule, Type, InjectionToken, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Routes, RouterModule, provideRoutes, ROUTES } from '@angular/router';

import { AppGenericComponentParams, AppGenericModuleParameters, AppGenericModuleWithCustomList,
    AppGenericModuleParamsWithoutCustomComponent } from './generic-module.parameters';
import { AppGenericListComponent } from './generic-list.component';
import { AppGenericFormComponent } from './generic-form.component';


@NgModule({
    declarations: [
        AppGenericListComponent,
        AppGenericFormComponent
    ],
    exports: [
        AppGenericListComponent,
        AppGenericFormComponent
    ]
})
export class AppGenericModule {
    public static genericRoutes(listComponent, formComponent): Routes {
        return [
            {
                path: 'list',
                component: listComponent
            },
            {
                path: 'edit/:id',
                component: formComponent
            },
            {
                path: 'new',
                component: formComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ];
    }

    public static forChild(moduleConfig: AppGenericModuleParamsWithoutCustomComponent) {
        // let listComponent: Type<any>;
        // let formComponent: Type<any>;
        // let l = moduleConfig;
        // if ((moduleConfig as any).listComponent) {
        //     const m = false;
        // }
        // if (moduleConfig['listComponent'] && typeof moduleConfig['listComponent'] === 'function') {
        //     // listComponent = moduleConfig['listComponent'] as Type<any>;
        // } else {
        //     // listComponent = AppGenericListComponent;
        // }
        /*
        if (moduleConfig['formComponent'] && typeof moduleConfig['formComponent'] === 'function') {
            formComponent = moduleConfig['formComponent'] as Type<any>;
        } else {
            formComponent = AppGenericFormComponent;
        }
        const routerModule = RouterModule.forChild(
            AppGenericModule.genericRoutes(
                listComponent,
                formComponent
            )
        );
        const routes = [
            {
                path: 'list',
                component: AppGenericListComponent
            },
            {
                path: 'edit/:id',
                component: AppGenericFormComponent
            },
            {
                path: 'new',
                component: AppGenericFormComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ];
        */
        return {
            ngModule: AppGenericModule,
            providers: [
                provideRoutes([
                    {
                        path: 'list',
                        component: AppGenericListComponent
                    },
                    {
                        path: 'edit/:id',
                        component: AppGenericFormComponent
                    },
                    {
                        path: 'new',
                        component: AppGenericFormComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'list'
                    }
                ])
            ]
            // providers: [
            //     {provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes},
            //     {provide: ROUTES, multi: true, useValue: routes}
            // ]
            // providers: [
            //     { provide: new InjectionToken('testInjection'), useValue: true}
            // ]
            // providers: routerModule.providers
        };
    }
}

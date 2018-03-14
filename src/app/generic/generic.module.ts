import { Component, Injector, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Routes, RouterModule } from '@angular/router';

import { AppGenericComponentParams, AppGenericModuleParameters } from './generic-module.parameters';

const genericModuleDefaults = {
    declarations: [],
    imports: [],
    exports: []
};

@NgModule(genericModuleDefaults)
export class AppGenericModule {
    public static genericFormComponent(componentConfig: AppGenericComponentParams) {
        return Component({
            template: `
                <h1>` + componentConfig.moduleTitle + ` form page</h1>
                <a routerLink="/">Home</a>
            `
        })(class {});
    }

    public static genericListComponent(componentConfig: AppGenericComponentParams) {
        return Component({
            template: `
                <h1>` + componentConfig.moduleTitle + ` list page</h1>
                <ul>
                    <li>Lorem <a routerLink="../edit/1">(edit)</a></li>
                    <li>Ipsum <a routerLink="../edit/2">(edit)</a></li>
                </ul>
            `
        })(class {});
    }

    public static genericRoutes(listComponent, formComponent, additionalRoutes: Route[] = []): Routes {
        return [
            ...additionalRoutes,
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

    public static forChild(moduleConfig: AppGenericModuleParameters): ModuleWithProviders {
        let listComponent: Type<any>;
        let formComponent: Type<any>;

        if (moduleConfig['listComponent'] && typeof moduleConfig['listComponent'] === 'function') {
            listComponent = moduleConfig['listComponent'] as Type<any>;
        } else {
            listComponent = AppGenericModule.genericListComponent({
                moduleTitle: moduleConfig['moduleTitle']
            });
        }
        if (moduleConfig['formComponent'] && typeof moduleConfig['formComponent'] === 'function') {
            formComponent = moduleConfig['formComponent'] as Type<any>;
        } else {
            formComponent = AppGenericModule.genericFormComponent({
                moduleTitle: moduleConfig['moduleTitle']
            });
        }

        if (!moduleConfig.additionalComponents) {
            moduleConfig.additionalComponents = [];
        }
        if (!moduleConfig.routes) {
            moduleConfig.routes = [];
        }
        if (moduleConfig.routes.length) {
            moduleConfig.routes.forEach(route => {
                moduleConfig.additionalComponents.push(route.component);
            });
        }
        const ngModuleAnnotations: NgModule = {
            declarations: [
                formComponent,
                listComponent
            ],
            imports: [
                RouterModule.forChild(
                    AppGenericModule.genericRoutes(
                        listComponent,
                        formComponent
                    )
                ),
                AppGenericModule
            ],
            exports: [
            ],
            providers: [
            ],
            entryComponents: [
                listComponent,
                formComponent,
                moduleConfig.routes
            ]
        };

        return {
            ngModule: NgModule(ngModuleAnnotations)(class { })
        };
    }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSample1Module } from './sample-1/sample-1.module';
import { AppSample2Module } from './sample-2/sample-2.module';

const routes = [
    {
        path: 'sample-1',
        loadChildren: './sample-1/sample-1.module#AppSample1Module',
    }, {
        path: 'sample-2',
        loadChildren: './sample-2/sample-2.module#AppSample2Module',
    },
];

@NgModule({
  imports:      [ RouterModule.forChild(routes) ],
  declarations: [ ],
  bootstrap:    [ ]
})
export class AppSampleModule { }

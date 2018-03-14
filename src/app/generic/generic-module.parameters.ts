import { NgModule, Type } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppGenericModule } from './generic.module';

export class AppGenericComponentParams {
    moduleTitle: String;
}

class AppGenericModuleCommonParams {
  config: any;
  translations?: any[];
  navigation?: any[];
  routes?: Route[];
  additionalComponents?: Type<any>[];
}

class AppGenericModuleWithCustomForm extends AppGenericModuleCommonParams {
  moduleTitle: String;
  formComponent: Type<any>;
}

class AppGenericModuleWithCustomList extends AppGenericModuleCommonParams {
  moduleTitle: String;
  listComponent: Type<any>;
}

class AppGenericModuleParamsWithCustomListAndFormComponent extends AppGenericModuleCommonParams {
  formComponent: Type<any>;
  listComponent: Type<any>;
}

class AppGenericModuleParamsWithoutCustomComponent extends AppGenericModuleCommonParams {
  moduleTitle: String;
}

export type AppGenericModuleParameters = AppGenericModuleParamsWithoutCustomComponent | AppGenericModuleWithCustomForm |
  AppGenericModuleWithCustomList | AppGenericModuleParamsWithCustomListAndFormComponent;

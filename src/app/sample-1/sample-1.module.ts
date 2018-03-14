import { NgModule } from '@angular/core';
import { AppGenericModule } from '../generic/generic.module';

@NgModule({
  imports: [
    AppGenericModule.forChild({
      moduleTitle: 'Sample 1',
      config: {
        sampleParameter: 'sample parameter'
      }
    })
  ]
})
export class AppSample1Module {

}

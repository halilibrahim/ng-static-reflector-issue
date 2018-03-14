import { NgModule } from '@angular/core';
import { AppGenericModule } from '../generic/generic.module';

@NgModule({
  imports: [
    AppGenericModule.forChild({
      moduleTitle: 'Sample 2',
      config: {
        sampleParameter: 'sample parameter'
      }
    })
  ]
})
export class AppSample2Module {

}

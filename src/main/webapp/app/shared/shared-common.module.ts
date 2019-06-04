import { NgModule } from '@angular/core';

import { NetsuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [NetsuiviSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [NetsuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NetsuiviSharedCommonModule {}

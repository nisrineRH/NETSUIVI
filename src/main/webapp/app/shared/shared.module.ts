import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NetsuiviSharedLibsModule, NetsuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NetsuiviSharedLibsModule, NetsuiviSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NetsuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NetsuiviSharedModule {
  static forRoot() {
    return {
      ngModule: NetsuiviSharedModule
    };
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Globals } from './_models/globals';
import { CommonModule, PercentPipe, DatePipe } from '@angular/common';
import { DxTabPanelModule, DxTreeViewModule, DxTemplateModule, DxPopupModule, DxDataGridModule, DxButtonModule, DxPopoverModule, DxGalleryModule, DxTabsModule, DxSelectBoxModule, DxCheckBoxModule, DxScrollViewModule, DxDropDownBoxModule, DxTreeViewComponent, DxAccordionModule, DxSliderModule, DxTagBoxModule, DxLoadPanelModule,DxTextAreaModule, DxChartModule, DxTextBoxModule } from 'devextreme-angular';
import { DataService } from './services/data.service';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { SimplebarAngularModule } from 'simplebar-angular';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { initializeKeycloak } from './init/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './guard/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    ManageUserComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    DxPopupModule,
    DxDataGridModule,
    DxButtonModule,
    FormsModule,
    DxPopoverModule,
    ReactiveFormsModule,
    NgbModule,
    DxTextBoxModule,
    TranslateModule,
    NgbDropdownModule,
    ClickOutsideModule,
    KeycloakAngularModule,
    SimplebarAngularModule,
    RouterModule.forRoot([
      { path: '', component: ManageUserComponent,canActivate:[AuthGuard]},
    ])
  ],
  //providers are used to setup the services that are going to be used in the angular project.
  providers: [
    Globals,
    DatePipe,
    DataService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

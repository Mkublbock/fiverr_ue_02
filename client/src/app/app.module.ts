import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import {
  AppComponent,
  AvailableDeviceComponent,
  BooleanControlComponent,
  ContinuousControlComponent,
  DeviceDetailsComponent,
  DiagramComponent,
  EnumControlComponent,
  NavigationComponent,
  LoginComponent,
  OverviewComponent,
  OptionsComponent
} from './components';
import { AuthGuard } from './guards';
import { AuthenticationClient, DeviceClient, PasswordClient } from './rest';
import { AuthenticationService, DeviceService, DiagramService, SessionStorageService, UserService } from './services';
import { ConfirmValidator, MaxValidator, MinValidator } from './validators';
import { AppLoadService } from './services/app-load.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor.service';
import { JwtInterceptor } from './services/jwt-interceptor';

export function check_token_expired(appLoadService: AppLoadService) {
  return () => appLoadService.checkTokenExpiration();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AvailableDeviceComponent,
    DiagramComponent,
    NavigationComponent,
    LoginComponent,
    OverviewComponent,
    OptionsComponent,
    DeviceDetailsComponent,
    BooleanControlComponent,
    ContinuousControlComponent,
    EnumControlComponent,
    ConfirmValidator,
    MaxValidator,
    MinValidator
  ],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: check_token_expired, deps: [AppLoadService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthGuard,
    AuthenticationClient,
    DeviceClient,
    PasswordClient,
    AuthenticationService,
    DeviceService,
    DiagramService,
    SessionStorageService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

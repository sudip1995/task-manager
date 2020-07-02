import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskManagerModule} from '../modules/task-manager/task-manager.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, Apollo} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {AuthModule, ConfigResult, OidcConfigService, OidcSecurityService, OpenIdConfiguration} from 'angular-auth-oidc-client';

const oidc_configuration = 'assets/auth.clientConfiguration.json';

export function loadConfig(oidcConfigService: OidcConfigService) {
  return () => oidcConfigService.load(oidc_configuration);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskManagerModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    RouterModule.forRoot(appRoutes),
    AuthModule.forRoot()
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo,
              httpLink: HttpLink,
              private oidcSecurityService: OidcSecurityService,
              private oidcConfigService: OidcConfigService) {

    this.oidcConfigService.onConfigurationLoaded.subscribe((configResult: ConfigResult) => {

      // Use the configResult to set the configurations
      const config: OpenIdConfiguration = {
        stsServer: configResult.customConfig.stsServer,
        redirect_url: 'http://localhost:4200',
        client_id: 'taskmanagersdp',
        scope: 'openid profile email',
        response_type: 'code',
        // silent_renew: true,
        // silent_renew_url: 'http://localhost:4200/silent-renew.html',
        log_console_debug_active: true,
        // all other properties you want to set
      };

      this.oidcSecurityService.setupModule(config, configResult.authWellknownEndpoints);
    });


    apollo.create({
      link: httpLink.create({uri: 'https://localhost:5001/graphql/'}),
      cache: new InMemoryCache()
    });
  }
}

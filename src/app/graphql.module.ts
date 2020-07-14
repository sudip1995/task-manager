import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {setContext} from 'apollo-link-context';
import {ApolloLink} from 'apollo-link';
import {environment} from '../environments/environment';

const uri = `${environment.task_manager_api}/graphql`;
export function provideApollo(httpLink: HttpLink, oidcSecurityService: OidcSecurityService) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  // Get the authentication token from local storage if it exists
  const token = oidcSecurityService.getToken();
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `Bearer ${token}`
    },
  }));

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  };
}


@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: provideApollo,
      deps: [HttpLink, OidcSecurityService]
    }
  ],
})
export class GraphQLModule {}

import { KeycloakService } from "keycloak-angular";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { fromPromise } from 'rxjs/internal-compatibility';
import { ConfigInitService } from "./config-init.service";

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'SpringBootkeycloak',
        clientId: 'demo-app'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }

    });
}

import { environment } from '../../environments/environment';

export const hiddenEndereco = () => {
  switch (environment.apiVersion) {
    case 'v1':
      return 1
    case 'v2':
      return 2;
    default:
      return 1;
  }
}

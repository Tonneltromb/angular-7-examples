import {Route} from '@angular/router';

import {RouteGroupTag} from '../RouteGroupTag';

export default interface ExamplesRoute extends Route {
  title: string;
  tag: RouteGroupTag;
}

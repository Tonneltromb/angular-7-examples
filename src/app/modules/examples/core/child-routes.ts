import {ITVDNChangeDetection01Component} from '../components/itvdn-change-detection-01/itvdn-cd-01.component';
import {ChangeDetectionComponent} from '../components/change-detection/change-detection.component';
import TitledRoute from './interfaces/TitledRoute';

export const CHILDREN: TitledRoute[] = [
  {title: '', path: '',  redirectTo: 'itvdn-cd-01', pathMatch: 'full'},
  {title: 'ITVDN - Отслеживание изменений 01', path: 'itvdn-cd-01', component: ITVDNChangeDetection01Component},
  {title: 'ITVDN - Квадратики', path: 'itvdn-cd-boxes', loadChildren: '../modules/boxes/boxes.module#BoxesModule'},
  {title: 'Change detection', path: 'change-detection', component: ChangeDetectionComponent}
];

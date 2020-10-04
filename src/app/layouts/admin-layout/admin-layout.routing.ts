import { Routes } from '@angular/router';

import { ChallengeComponent } from '../../challenge/dashboard.component';
import { EcuadorComponent } from '../../ecuador/user-profile.component';
import { TeamComponent } from '../../team/table-list.component';
import { FootprintComponent } from '../../footprint/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'challenge',      component: ChallengeComponent },
    { path: 'ecuador',   component: EcuadorComponent },
    { path: 'team',     component: TeamComponent },
    { path: 'me-footprint',     component: FootprintComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
];

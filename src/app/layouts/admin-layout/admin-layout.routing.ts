import { Routes } from '@angular/router';

import { ChallengeComponent } from '../../challenge/challenge.component';
import { EcuadorComponent } from '../../ecuador/ecuador.component';
import { TeamComponent } from '../../team/team.component';
import { FootprintComponent } from '../../footprint/footprint.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'challenge',      component: ChallengeComponent },
    { path: 'ecuador',   component: EcuadorComponent },
    { path: 'team',     component: TeamComponent },
    { path: 'me-footprint',     component: FootprintComponent },
    { path: 'code',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
];

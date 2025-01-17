
import { Routes } from '@angular/router';
import { MembersDetailsComponent } from './members-details/members-details.component';




export const serverRoutes: Routes = [
    
    { path: 'member-details/:id', component: MembersDetailsComponent }   
];


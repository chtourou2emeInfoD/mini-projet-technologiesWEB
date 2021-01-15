import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { FormateurListComponent } from './formateur-list/formateur-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: NavigationBarComponent,
    children: [
      {
        path: 'sessions',
        component: AdminComponent,
        children: [
          {
            path: 'add',
            component: SessionAddFormComponent
          },
          {
            path: 'edit/:id',
            component: SessionEditFormComponent
          },
          {
            path: 'list', component: SessionItemListComponent
          },
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'formateurs',
        component: FormateurListComponent
      },
      {
        path: 'participants',
        component: ParticipantListComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
      }
    ]
  },
];

@NgModule({
  declarations: [AdminComponent, SessionItemComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent, NavigationBarComponent, ParticipantListComponent, FormateurListComponent, DashboardComponent, DashboardCardComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

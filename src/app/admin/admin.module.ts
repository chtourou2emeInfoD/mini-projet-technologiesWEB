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
import { ParticipantComponent } from './participant/participant.component';
import { FormateurListComponent } from './formateur-list/formateur-list.component';

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
      }
    ]
  },
];

@NgModule({
  declarations: [AdminComponent, SessionItemComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent, NavigationBarComponent, ParticipantComponent, FormateurListComponent],
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }

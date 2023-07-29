import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatDatepickerModule } from '@angular/material/datepicker'; // Import MatDatepickerModule
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Optional, but recommended for form fields
// import { modules } from '@mobiscroll/angular/dist/js/core/components/datepicker/datepicker';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
// import { MatIconButton } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    // NewComponentComponent,
    TodoComponent,
    HelloComponent,
    HistoryComponent,
    TaskManagementComponent,


    // ButtonToggleAppearanceExampleComponent
  ],
  imports: [
   BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule ,
    MatInputModule, // Add MatInputModule
    MatDatepickerModule, // Add MatDatepickerModule
    MatNativeDateModule, // Add MatNativeDateModule
    MatFormFieldModule, //
    MatRadioModule,
    // MatIconButton 
    
    // modules
    // MatButtonToggleModule
    // MatCardModule,
    //  MatButtonModule
    // MobiscrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
// exports:[MatButtonModule]
export class AppModule { }
// export class ButtonToggleAppearanceExample {}



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListComponent} from './component/list/list.component';
import {RoutingModule} from './routing.module';
import {SearchComponent} from './component/filter/filter.component';
import {ValueComponent} from './component/value/value.component';
import {AddComponent} from './component/add/add.component';
import {NameFilterPipe} from './pipe/name-filter.pipe';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './component/app.component';
import {CompletionFilterPipe} from './pipe/completion-filter.pipe';
import {CompletionComponent} from './component/completion/completion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatInputModule,
  MatListModule, MatRadioModule, MatToolbarModule
} from '@angular/material';
import {ActionBarComponent} from './component/action-bar/action-bar.component';
import {EditorComponent} from './component/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    ValueComponent,
    AddComponent,
    CompletionComponent,
    ActionBarComponent,
    EditorComponent,
    NameFilterPipe,
    CompletionFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

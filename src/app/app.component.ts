import { Component } from '@angular/core';
import * as myConstants from './domains/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = myConstants.TITLE;
}

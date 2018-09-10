import { Component, OnInit } from '@angular/core';
import * as myConstants from '../domains/constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = myConstants.TITLE;

  constructor() { }

  ngOnInit() {
  }

}

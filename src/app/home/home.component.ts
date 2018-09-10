import { Component, OnInit } from '@angular/core';
import { Item } from '../domains/item';
import { ItemService } from '../services/item.service';
import * as myConstants from '../domains/constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  title = myConstants.TITLE;

  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items.slice(0, 2));
  }
}
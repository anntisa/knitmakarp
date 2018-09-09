import { Component, OnInit } from '@angular/core';
import { Item } from '../domains/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  // TODO: change to api call to items in firebase DB
  // TODO: remove mocks/item-list.ts file
  items: Item[];


  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

}

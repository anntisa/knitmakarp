import { Injectable } from '@angular/core';
import { Item } from '../domains/item';
import { ITEMS } from '../mocks/item-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private messageService: MessageService) { }

  //TODO: fetch from a real db
  getItems(): Observable<Item[]> {
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }

  // TODO: fetch fro ma real db
  getItem(id: number): Observable<Item> {
    this.messageService.add(`ItemService: fetched item id=${id}`);
    return of(ITEMS.find(item => item.id === id));
  }
}

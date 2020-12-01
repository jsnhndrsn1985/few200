import { Component, OnInit } from '@angular/core';
import { GiftItem } from '../../models';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit {

  items: GiftItem[] = [
    { for: 'Felix', holiday: 'Crimmus', suggestions: 'Video Games' },
    { for: 'Aly', holiday: 'Crimmus', suggestions: 'Stuff' },
    { for: 'Felix', holiday: 'Crimmus', suggestions: 'Video Games' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

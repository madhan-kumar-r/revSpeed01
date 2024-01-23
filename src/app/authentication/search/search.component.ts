import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  sliderItems = [1, 2, 3, 4, 5];
  activeItem = this.sliderItems[0];

  setActiveItem(item: number): void {
    this.activeItem = item;
  }
}

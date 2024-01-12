import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TagsComponent } from '../tags/tags.component';
import { Food } from '../../model/food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.css'
})
export class NewHomeComponent {
  foods: Food[] = [];
  constructor(private foodService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = this.foodService.getAll();
    })
  }
  tags = [
    { name: 'All', count: 14 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
  ];
}

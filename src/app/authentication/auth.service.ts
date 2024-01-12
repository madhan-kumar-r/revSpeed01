import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { Food } from '../model/food';
import { TagsComponent } from './tags/tags.component';
import { Tag } from '../model/tag';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private isAdminn: boolean = false;

  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/products';

  // Simulate login
  public login(username: string, password: string): boolean {
    // Your authentication logic here
    // For example, check credentials and set isAuthenticated and isAdmin accordingly
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.isAdminn = true;
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.isAdminn = false;
      return true;
    } else {
      return false;
    }
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  public isAdmin(): boolean {
    return this.isAdminn; // Corrected property name
  }

  public isUser(): boolean {
    return this.isAuthenticated && !this.isAdminn; // Corrected property name
  }

  public clear(): void {
    this.isAuthenticated = false;
    this.isAdminn = false; // Corrected property name
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
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

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'https://jep-asset.akamaized.net/cms/assets/jiofiber/services/highspeed-internet/High-speed-internet-fiber-list.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'https://jep-asset.akamaized.net/cms/assets/jiofiber/services/home-networking/Home-network-fiber-list.png',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'https://jep-asset.akamaized.net/cms/assets/jiofiber/services/setupbox/STBcard.png',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'https://jep-asset.akamaized.net/cms/assets/jiofiber/apps/jiojoin/TV-Video-Calling-fiber-list.png',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'https://jep-asset.akamaized.net/cms/assets/jiofiber/discover/learn-about-jiophotos.png',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'https://jep-asset.akamaized.net/cms/assets/jiofiber/discover/explore-jiotv-plus.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
  

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productDetails: any[] = []; // replace any[] with your actual type
  showLoadButton = true;

  constructor(private productService: AuthService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.productDetails = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  
  // Dummy function for the searchByKeyword method
  searchByKeyword(keyword: string): void {
    // This is a dummy function, you can leave it empty or add any console log
    console.log(`Searching by keyword: ${keyword}`);
  }

  // Dummy function for the showProductDetails method
  showProductDetails(productId: string): void {
    // This is a dummy function, you can leave it empty or add any console log
    console.log(`Showing details for product with ID: ${productId}`);
  }
  

  // Dummy function for the loadMoreProduct method
  
   /* styles.css or styles.scss */


}

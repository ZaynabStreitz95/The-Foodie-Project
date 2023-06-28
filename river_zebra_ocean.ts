// The Foodie Project

// Imports
import { Injectable } from '@angular/core'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Service
export class FoodieService {
  constructor(private http:HttpClient) { }
  
  // API Endpoint
  apiUrl: string = 'http://foodie.com/api';
  
  // Get all restuarants
  getRestaurants(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/restaurants');
  } 
  
  // Get restaurant by ID
  getRestaurantById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/restaurants/' + id);
  }
  
  // Get all dishes
  getDishes():Observable<any> {
    return this.http.get<any>(this.apiUrl + '/dishes');
  }
  
  // Get dish by ID
  getDishById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/dishes/' + id);
  }
  
  // Get all ingredients
  getIngredients(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/ingredients');
  }
  
  // Get ingredient by ID
  getIngredientById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/ingredients/' + id);
  }
  
  // Get all ratings
  getRatings(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/ratings');
  }
  
  // Get rating by ID
  getRatingById(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/ratings/' + id);
  }
  
  // Add a restaurants
  addRestaurant(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/restaurants', data);
  }
  
  // Add a dish
  addDish(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/dishes', data);
  }
  
  // Add an ingredient
  addIngredient(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/ingredients', data);
  }
  
  // Add a Rating
  addRating(data): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/ratings', data);
  }
  
  // Update a restaurant
  updateRestaurant(id: number, data): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/restaurants/' + id, data);
  }
  
  // Update a dish
  updateDish(id: number, data): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/dishes/' + id, data);
  }
  
  // Update an ingredient
  updateIngredient(id: number, data): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/ingredients/' + id, data);
  }
  
  // Update a rating
  updateRating(id: number, data): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/rating/' + id, data);
  }
  
  // Delete a restaurant
  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/restaurants/' + id);
  }
  
  // Delete a dish
  deleteDish(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/dishes/' + id);
  }
  
  // Delete an ingredient
  deleteIngredient(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/ingredients/' + id);
  }
  
  // Delete a rating
  deleteRating(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/ratings/' + id);
  }
  
  // Error handler
  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
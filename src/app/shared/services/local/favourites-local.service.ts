import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesLocalService {

  private favourites: any[] = [];

  constructor() { }

  addNewFavourite(newFavourite: any){

    const isAdded = !!this.favourites.find(favourite => favourite.id === newFavourite.id);
    if (!isAdded){
      this.favourites.push(newFavourite);
    }
    console.log(this.favourites);
  }

  getFavourites(){
    return this.favourites;
  }
}

import { FavouritesLocalService } from './../../shared/services/local/favourites-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.scss']
})
export class FavouritePageComponent implements OnInit {

  favouritesLocal: any;

  constructor(private favouritesLocalService: FavouritesLocalService) { }

  ngOnInit(): void {

    this.favouritesLocal = this.favouritesLocalService.getFavourites();
    console.log(this.favouritesLocal);
  }

}

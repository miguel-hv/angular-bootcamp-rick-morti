import { FavouritesLocalService } from './../../services/local/favourites-local.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() characterGallery:any; 

  constructor(private favouriteLocalService: FavouritesLocalService) { }

  ngOnInit(): void {
  }

  addToFavourites(favourite: any){
    this.favouriteLocalService.addNewFavourite(favourite); 
  }

}

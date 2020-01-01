import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../services/gallery.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private lesPhotos: any;
  public p: number = 0;
  private moCle: string = 'Africa';
  private messageVide: string = '';

  constructor(private galleryService: GalleryService, private router: Router) {
  }

  ngOnInit() {
    this.onSearchPhoto(this.moCle);
  }

  onSearchPhoto(value: any) {
    this.moCle = value.keyword;
    this.galleryService.getPhoto(this.moCle)
      .subscribe(data => {
        if (data['hits'].length == 0) {
          let mcl = value.keyword;
          this.messageVide = "Ops, pas de photos pour "+ mcl.toUpperCase();
        } else {
          this.lesPhotos = data;
          this.messageVide=""
        }
      }, error => {
        console.log(error);
      });
    this.moCle = '';
  }

}

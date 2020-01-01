import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor( private httpClient : HttpClient) { }
  getPhoto(mc){
    return this.httpClient.get("https://pixabay.com/api/?key=14755408-c767643b8f424c6dc73cdf0c2&q="+mc+"&per_page=200&page=1")
  }
}

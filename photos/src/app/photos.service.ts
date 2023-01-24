import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  public getRandomPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID c5KfT6LT-MK8A8gnGHQcD7GO4nfxA1_sdlenpuaM2wo'
      }
    });
  }
}

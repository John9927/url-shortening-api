import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  url = "https://api.shrtco.de/v2/shorten?url=";
  api: any;
  end = "/very/long/link.html";
}

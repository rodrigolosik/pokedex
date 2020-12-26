import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})
export class CacheService {

  constructor(private http: HttpClient) {
  }

  exists (name: string): boolean {
    const data = localStorage.getItem(name);
    if(data)
      return true;
    else
      return false;
  }

  saveStorage (name: string, data: any): any {
    let str = JSON.stringify(data);
    localStorage.setItem(name, str);
  }
  loadStorage (name:string): any {
    const data = localStorage.getItem(name);
    if(data) {
      return JSON.parse(data);
    }
    else {
      return null;
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';
  
  constructor(private http: HttpClient) { }

  getPokemons(limit: number = 20, offset: number) {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }
}
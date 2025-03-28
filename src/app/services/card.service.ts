import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Card } from '../types/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly http: HttpClient = inject(HttpClient);

  getCards(filters: { [key: string]: string }): Observable<Card[]> {
    let params = new HttpParams();
    
    Object.keys(filters).forEach(key => {
      if(filters[key] != "" && filters[key] != null){
        params = params.set(key, filters[key]);
      }
    });
    console.log(`params = ${params}`)

    return this.http.get<{ data: Card[] }>(environment.API_CARDS, { params })
      .pipe(
        map(response => response.data || []) 
      );
  }
}

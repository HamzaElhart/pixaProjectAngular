import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PixaDataService {
  private apiUrl = 'https://pixabay.com/api/';
  private apiKey = '47406797-bd4a65731e56a5e94becc01f2'; //change it with your own form pixaBy by login into their official website .

  private cachedData: any[] = [];

  constructor(private http: HttpClient) {}

  fetchData(searchTerm: string = ''): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', searchTerm)
      .set('per_page', '20');

    return this.http.get<any>(this.apiUrl, { params });
  }

  getCachedData(): any[] {
    return this.cachedData;
  }

  updateCache(data: any[]): void {
    this.cachedData = data;
  }
}

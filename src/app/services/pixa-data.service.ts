import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PixaDataService {
  apiUrl = 'https://pixabay.com/api/?key=47406797-bd4a65731e56a5e94becc01f2';

  constructor(private http: HttpClient) {}

  getData(): any {
    return this.http.get(this.apiUrl);
  }
}

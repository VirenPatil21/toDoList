import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpClientService {
    constructor(private http: HttpClient) { }

    get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http
        .get(`${url}`, { headers: headers, params: params })
        .pipe(catchError(error => error));
    }
}
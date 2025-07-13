import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) {}


  get<T>(url: string, options: { params?: any } = {}): Observable<T> {
    const cacheKey = this.createCacheKey(url, { params: options.params });
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as Observable<T>;
    }
    const request$ = this.http.get<T>(url, { params: options.params }).pipe(shareReplay(1));
    this.cache.set(cacheKey, request$);
    return request$;
  }

  post<T>(url: string, body: any, options: { params?: any } = {}): Observable<T> {
    const cacheKey = this.createCacheKey(url, { params: options.params, body });
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as Observable<T>;
    }
    const request$ = this.http.post<T>(url, body, { params: options.params }).pipe(shareReplay(1));
    this.cache.set(cacheKey, request$);
    return request$;
  }

  put<T>(url: string, body: any, options: { params?: any } = {}): Observable<T> {
    const cacheKey = this.createCacheKey(url, { params: options.params, body });
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as Observable<T>;
    }
    const request$ = this.http.put<T>(url, body, { params: options.params }).pipe(shareReplay(1));
    this.cache.set(cacheKey, request$);
    return request$;
  }

  delete<T>(url: string, options: { params?: any; body?: any } = {}): Observable<T> {
    // Angular's HttpClient.delete supports 'body' only in v12+, but not all backends support it. Use with caution.
    const cacheKey = this.createCacheKey(url, { params: options.params, body: options.body });
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as Observable<T>;
    }
    const request$ = this.http.delete<T>(url, { params: options.params, body: options.body }).pipe(shareReplay(1));
    this.cache.set(cacheKey, request$);
    return request$;
  }


  private createCacheKey(url: string, options: { params?: any; body?: any }): string {
    const paramsString = options.params ? JSON.stringify(options.params) : '';
    const bodyString = options.body ? JSON.stringify(options.body) : '';
    return `${url}|params:${paramsString}|body:${bodyString}`;
  }

  // Optionally, add methods for POST, PUT, DELETE, etc., with similar caching if needed
  clearCache(url?: string) {
    if (url) {
      this.cache.delete(url);
    } else {
      this.cache.clear();
    }
  }
}

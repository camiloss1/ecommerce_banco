import { enableProdMode, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { catchError, concat, concatMap, delay, Observable, of, retryWhen, take, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) { }

  public get<T>(url?: string, endpoint?: string, params?: string): Observable<any> {
    const endpointWithParams = params ? `${endpoint}/` : `${endpoint}`;
    return this.http.get<T>(`${url}/${endpointWithParams}` + (params ?? '')).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result: any) => {
          if(result.code === 504) {
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError(`No fue posible conectarse al servicio`))
      )),
      catchError((error :HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

  public post<T>(url?:string,endpoint?:string,model?:any): Observable<any>{
    return this.http.post<T>(`${url}/${endpoint}`,model);
  }

  public put<T>(url?:string,endpoint?:string,model?:any):Observable<any>{
    return this.http.put<T>(`${url}/${endpoint}`,model);
  }
  public patch<T>() {

  }

  public delete<T>() {

  }
}

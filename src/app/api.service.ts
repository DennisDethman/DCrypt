import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //constructor() { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getUsers(){
      return this.http.get('/userapi', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getUser(id: string){
    return this.http.get('/userapi/'+id, httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError));
  }

  updateUser(id: string, data): Observable<any> {
    return this.http.put('/userapi/'+id, data, httpOptions)
    .pipe(
    catchError(this.handleError)
    );
  }

  getSentMsg(msg): Observable<any> {
    return this.http.get('/getmsgsapi/'+msg, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getSentMsgs(): Observable<any> {
    return this.http.get('/getmsgsapi', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getRecvdMsg(msg): Observable<any> {
    return this.http.get('/recvdmsgsapi/'+msg, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  //getRecvdMsgs(): Observable<any> {
  getRecvdMsgs(id: string): Observable<any> {
    return this.http.get('/recvdmsgsapi/allforid/'+id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  postSentMsg(data): Observable<any> {
    return this.http.post('/getmsgsapi', data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateSentMsg(id: string, data): Observable<any> {
    return this.http.put('/getmsgsapi/'+id, data, httpOptions)
    .pipe(
    catchError(this.handleError)
    );
  }

  postRecvdMsg(data): Observable<any> {
    return this.http.post('/recvdmsgsapi', data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRecvdMsg(id: string, data): Observable<any> {
    return this.http.put('/recvdmsgsapi/'+id, data, httpOptions)
    .pipe(
    catchError(this.handleError)
    );
  }

  getGameStat(id: string): Observable<any> {
    return this.http.get('/userapi/'+id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getGameStats(): Observable<any> {
    return this.http.get('/userapi/stats', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateGameStat(id: string, data): Observable<any> {
    return this.http.put('/statsapi/'+id, data, httpOptions)
    .pipe(
    catchError(this.handleError)
    );
  }

  createGameStat(data): Observable<any> {
    return this.http.post('/statsapi', data, httpOptions)
    .pipe(
    catchError(this.handleError)
    );
  }
  
  // deleteBook(id: string): Observable<{}> {
  //   const url = `${apiUrl}/${id}`;
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

}

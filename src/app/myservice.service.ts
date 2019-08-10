import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {stringify} from 'querystring';

@Injectable({
    providedIn: 'root'
})
export class MyserviceService {

    constructor(private http: HttpClient) {
    }
    key = '81738a9ae5d0641a5c2dff30351d9c07';

headers = {
Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'};

valueForGettinDetail: any;



// ------------Handle error common function-----------//
    handleError(error) {
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = {Error: error.error.message};
        } else {
            // server-side error
            errorMessage = {Message: error.message};
            // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    getCountry() {

        // return this.http.get('http://battuta.medunes.net/api/country/all/?key=' + this.key);

        return this.http.get('http://battuta.medunes.net/api/country/all/?key=' + this.key).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }

    getState(country) {
console.log('http://battuta.medunes.net/api/region/' + country + '/all/?key=' + this.key);
return this.http.get('http://battuta.medunes.net/api/region/' + country + '/all/?key=' + this.key).pipe(
            retry(1),
            catchError(this.handleError)
        );
        // In/all/?key=e43c7e642de257bc335ef015ea9cd93e
    }
    savingData(value) {

this.valueForGettinDetail = value;
       //  const newval=JSON.stringify(value)
       // return this.http.post(` http://localhost:3000/hello`, { newval},{headers:this.headers});
    }

    gettingvalueForDetail() {
        return this.valueForGettinDetail;
    }
}


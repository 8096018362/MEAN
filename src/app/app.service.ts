import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { map, filter, switchMap } from 'rxjs/operators';

// import 'rxjs/add/operator/catch';


@Injectable()
export class AppService {
    isLoggedIn = false;
    redirectUrl: string;
    public headers: Headers

    constructor(public http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }


    updateUser(userObj) {
        return this.http.put('http://localhost:3000/updateUser/' + userObj.mobile_number, userObj, { headers: this.headers })
            .pipe(map((res: Response) => {
                console.log(res.json())
                return res.json();
            }))
    }

    genericGetMethod(Requrl) {
        return this.http.get(Requrl, { headers: this.headers }).pipe(map((res: Response) => {
            return res.json();
        }))
    }

    genericPostMethod(Requrl, obj) {
        return this.http.post(Requrl, obj, { headers: this.headers }).pipe(map((res: Response) => {
            return res.json();
        }))
    }

    genericPutMethod(Requrl, obj) {
        return this.http.post(Requrl, obj, { headers: this.headers }).pipe(map((res: Response) => {
            return res.json();
        }))
    }


    private handleError(error: any) {
        if (error.status === 401) {
            return Observable.throw(error._body);
        }
    }
}


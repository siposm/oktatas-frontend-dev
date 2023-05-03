import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() { }

    public isLoggedIn():boolean {
        let token = localStorage.getItem('nikprog-practiceapi-token')
        // TODO check expiration date etc.
        return token != null
    }
}

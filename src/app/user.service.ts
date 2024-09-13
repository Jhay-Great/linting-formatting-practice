import { Injectable } from '@angular/core';

// local modules
import { IUser } from './interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private users = [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
    ];

    constructor() {}

    getUsers() {
        return this.users;
    }

    addUser(user: IUser) {
        this.users.push(user);
    }
}

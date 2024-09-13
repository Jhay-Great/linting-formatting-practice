import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

// local modules
import { IUser } from '../interfaces/user.interface';

@Component({
    selector: 'app-user-list',
    standalone: true,
    template: `
        <ul>
            @for (user of users; track $index) {
                <li>{{ user.name }} ({{ user.age }})</li>
            }
            <!-- <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li> -->
        </ul>
    `,
    styles: [
        `
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                margin-bottom: 10px;
            }
        `,
    ],
})
export class UserListComponent implements OnInit {
    users!: IUser[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = this.userService.getUsers();
    }
}

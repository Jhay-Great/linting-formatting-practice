import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-say-hi',
    standalone: true,
    imports: [],
    templateUrl: './say-hi.component.html',
    styleUrl: './say-hi.component.css',
})
export class SayHiComponent implements OnInit {
    say!: string;

    constructor() {}

    ngOnInit(): void {
        this.say = this.sayHi();
    }

    sayHi() {
        const statement = 'Hi mate';
        console.log(statement);
        return statement;
    }
}

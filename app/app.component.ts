import {Component} from '@angular/core';
@Component({
    selector:'my-app',
    template:
    `
        <h2> {{title}} </h2>
    `
})
export default class AppComponent {
    title:string = "Todo List"
}
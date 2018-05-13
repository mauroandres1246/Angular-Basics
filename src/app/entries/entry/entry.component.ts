import { Component } from '@angular/core';
@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent{
    title:string = "My first photo";
    photo:string="http://placehold.it/800x500?text=Angular Basics";
    description:string="Description"
}
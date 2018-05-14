import { Entry } from "./entry.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class EntryService{
    constructor(private http:Http){

    }
    getEntries():Promise<Entry[]>{
        return this.http.get('/app/entries')
                        .toPromise()
                        .then(response=>response.json().data as Entry[]);

    }
}
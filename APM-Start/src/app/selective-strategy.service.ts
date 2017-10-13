import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/Observable/of";

@Injectable()
export class SelectiveStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        if (route.data && route.data['preload']) {
            return  load();
        }
        return Observable.of(null);
    }
}
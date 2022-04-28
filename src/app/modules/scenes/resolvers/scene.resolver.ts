import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FindSceneGQL, Scene } from 'src/app/generated/graphql-types';

@Injectable({
  providedIn: 'root'
})
export class SceneResolver implements Resolve<Scene> {

  constructor(private service: FindSceneGQL) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Scene> {
    return <Observable<Scene>> this.service.fetch({
      id: route.paramMap.get('id')!
    }).pipe(
      map(result => result.data.findScene)
    );
  }
}

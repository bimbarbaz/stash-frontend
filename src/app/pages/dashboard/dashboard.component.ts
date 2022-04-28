import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StatsGQL, StatsResultType } from 'src/app/generated/graphql-types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

stats: Observable<StatsResultType>;

constructor(statsGQL: StatsGQL) {
  this.stats = statsGQL.watch().valueChanges.pipe(
    map(result => result.data.stats)
  );
}

  ngOnInit(): void {

  }

}

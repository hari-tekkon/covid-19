import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MapData} from '../../models/map.models';
import {select, Store} from '@ngrx/store';
import {MapState} from '../../reducers/map.reducers';
import {AppState} from '../../models/app-state.models';
import {LoadData, LoadDataSuccess} from '../../actions/map.actions';
import {getListState, getLoadingState} from '../../selectors/map.selectors';


@Component({
  selector: 'app-updateblock',
  templateUrl: './updateblock.component.html',
  styleUrls: ['./updateblock.component.css']
})
export class UpdateblockComponent implements OnInit {
  showInfo: boolean = false;
  mapData$: Observable<MapData[]>;
  loading$: Observable<Boolean>;
  information;

  constructor(private store: Store<{ map: AppState }>) {
  }

  ngOnInit(): void {
    // this.store.pipe(select('map')).subscribe(data => {
    //   this.information = data;
    //   console.log(this.information);
    // });
    this.store.select(getListState).subscribe(data => {
      this.information = data;
      console.log(this.information);
    });
    this.loading$ = this.store.select(getLoadingState);
    this.store.dispatch(new LoadData([85.01220703125, 28.594168506232606]));
  }

  mapClicked($event) {
    this.store.dispatch(new LoadData($event));
    this.showInfo = true;
  }
}

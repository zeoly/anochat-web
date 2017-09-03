import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  items = [{}, {}, {}];

  dataSource = new ExampleDataSource();
}

export interface Role {
  name: string;
  desc: string;
}

const data: Role[] = [
  { name: 'adsf', desc: 'fgfgfgfgfgf' },
  { name: 'dfdd', desc: 'asdffrgg' }
];

export class ExampleDataSource extends DataSource<any> {
  connect(): Observable<Role[]> {
    return Observable.of(data);
  }

  disconnect() { }
}

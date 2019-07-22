import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members$ = this._store.pipe(select(selectMemberList));
  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {

    this._store.dispatch(new GetUsers());

  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}

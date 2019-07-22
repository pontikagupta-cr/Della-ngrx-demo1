import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {

  @Input()
  user: IUser;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent implements OnInit {
  // private _user;
  // constructor(private _authService: AuthService) {
  //   this._authService.user.subscribe((user) => {
  //     this._user = user;
  //   });
  // }

  ngOnInit(): void {}

  // public getUserName() {
  //   return this._user.name;
  // }
}

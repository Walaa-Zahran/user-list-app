import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../../../../shared/services/user-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() searchedId!: number;
  user: any;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    if (this.searchedId) {
      this.userService.getUser(this.searchedId).subscribe((user) => {
        console.log(user);
        this.user = user;
      });
    }
  }
}

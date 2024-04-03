import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../../../shared/services/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log('userId', userId);
    if (userId) {
      this.userService.getUser(+userId).subscribe((users: any) => {
        console.log('users', users);
        this.user = users.data;
      });
    }
  }
}

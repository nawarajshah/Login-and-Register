import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { claimReq } from '../shared/utils/claimsReq-utils';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HideIfClaimsNotMetDirective],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  claimReq = claimReq
  fullName: string = ''

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe({
      next: (res: any) => this.fullName = res.fullName,
      error: (err: any) => console.log('error while retrieving user profile:\n', err)
    })
  }
}import { HideIfClaimsNotMetDirective } from '../directives/hide-if-claims-not-met.directive';


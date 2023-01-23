import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  showSucessMessage: any;
  serverErrorMessages: any;
  package: any = [];
  saveUsername:any;
 
  result: any;
  constructor(
    public packageService: PackageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.packageService.addPromotion(form.value).then
      (
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 10000);
          this.result = res;
          this.router.navigate(['dashboard/promotion']);
        },
        err => {
          {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br/>')
              setTimeout(() => this.serverErrorMessages = false, 10000);
            }
            else
              this.serverErrorMessages = 'Something wrong .please contect admin .'
            setTimeout(() => this.serverErrorMessages = false, 10000);
          }
        },
      ).catch((err) => {
        console.log(err);
      })
  }
  onSaveUsernameChanged(event:any){
    console.log(event.target.checked);
    this.package.promotionShow = event.target.checked;
  }
}

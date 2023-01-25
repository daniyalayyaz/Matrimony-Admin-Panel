import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from 'app/dashboard/package.service';

@Component({
  selector: 'app-cast-edit',
  templateUrl: './promotion-edit.component.html',
  styleUrls: ['./promotion-edit.component.scss']
})
export class PromotionEditComponent implements OnInit {

  id: any;
  edititem: any = [];
  showSucessMessage: any;
  serverErrorMessages: any;
  package: any = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description:new FormControl('', Validators.required),
    promotionShow:new FormControl('', Validators.required),
  })
  updateitem: any = [];
  constructor(private activateRoute: ActivatedRoute, private router: Router,private packageService:PackageService

   ) {
  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.edit();

  }
  edit() {
    this.packageService.getPromotionById(this.id).then((res) => {
      console.log(res);
      this.edititem = res;
    })
  }
  async update() {
    
    this.packageService.updatePromotion(this.id, this.form.value).then((res) => {
      console.log(res);
      this.updateitem = res;
      console.log(res);
      
      this.router.navigate(['/dashboard/promotion']);
    }
    ).catch((err) => {
      {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>')
          setTimeout(() => this.serverErrorMessages = false, 10000);
        }
        else
          this.serverErrorMessages = 'Something wrong .please contect admin .'
        setTimeout(() => this.serverErrorMessages = false, 10000);
      }
    })
  }

}

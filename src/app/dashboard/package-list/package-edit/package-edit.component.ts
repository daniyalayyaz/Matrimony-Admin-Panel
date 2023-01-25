import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from 'app/dashboard/package.service';

@Component({
  selector: 'app-cast-edit',
  templateUrl: './package-edit.component.html',
  styleUrls: ['./package-edit.component.scss']
})
export class PackageEditComponent implements OnInit {

  id: any;
  edititem: any = [];
  showSucessMessage: any;
  serverErrorMessages: any;
  package: any = [];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image:new FormControl('', Validators.required),
    description:new FormControl('', Validators.required),
    connect:new FormControl('', Validators.required),
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
    this.packageService.getPackageById(this.id).then((res) => {
      console.log(res);
      this.edititem = res;
    })
  }
  async update() {
    this.packageService.updatePackage(this.id, this.form.value).then((res) => {
      console.log(res);
      this.updateitem = res;
      
      this.router.navigate(['/dashboard/package']);
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

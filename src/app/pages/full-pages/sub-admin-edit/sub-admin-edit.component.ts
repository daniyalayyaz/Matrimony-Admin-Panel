import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from 'app/dashboard/package.service';
import { MustMatch } from 'app/shared/directives/must-match.validator';
import { PagesService } from 'app/shared/services/pages.service';

@Component({
  selector: 'app-cast-edit',
  templateUrl: './sub-admin-edit.component.html',
  styleUrls: ['./sub-admin-edit.component.scss']
})
export class SubAdminEditComponent implements OnInit {

  id: any;
  edititem: any = [];
  showSucessMessage: any;
  serverErrorMessages: any;
  package: any = [];

  registerForm:UntypedFormGroup;

  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   price: new FormControl('', Validators.required),
  //   image:new FormControl('', Validators.required),
  //   description:new FormControl('', Validators.required),
  //   connect:new FormControl('', Validators.required),
  // })
  updateitem: any = [];
  data: any;
  constructor(private activateRoute: ActivatedRoute, 
    private router: Router,
    private packageService:PackageService,
    private pagesService: PagesService,
    private formBuilder: UntypedFormBuilder,

   ) {
  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.edit();
 this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      edit:[''],
      status:[''],
    });
  }
  edit() {
    this.pagesService.getSubAdminById(this.id).then((res) => {
      console.log(res);
      this.edititem = res;
    })
  }
  async update() {
    
    this.pagesService.updateSubAdmin(this.id, this.registerForm.value).then((res) => {
      console.log(res);
      this.updateitem = res;
      
      this.router.navigate(['/pages/sub-admin-list']);
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

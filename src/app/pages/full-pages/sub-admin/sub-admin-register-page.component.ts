import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, UntypedFormGroup, FormControl, Validators, UntypedFormBuilder } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../../shared/directives/must-match.validator';
import { Router } from '@angular/router';
import { Role } from 'app/pages/_model/role';
import { PagesService } from 'app/pages/pages.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './sub-admin-register-page.component.html',
  styleUrls: ['./sub-admin-register-page.component.scss']
})

export class SubAdminRegisterPageComponent implements OnInit {
  registerFormSubmitted = false;
  registerForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router,
    private toasterservice: ToastrService,
    private pagesService: PagesService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      view:[''],
      edit:['',]
      // Role:[Role.Admin],

      // acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')

    });
  }

  get rf() {
    return this.registerForm.controls;
  }


  //  On submit click, reset field value
  onSubmit() {
    console.log(this.registerForm.value);
    
    this.registerFormSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.pagesService.subAdminCreate(this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      // this.data = res
    });
    console.log(this.registerForm);

    
    // this.router.navigate(['/pages/login']);
    //  this.pagesService.createProfile(this.registerForm.value).subscribe(res => {
    //   console.log(res);
      
        // if (res) {

        //   localStorage.setItem(LocalStorageItem.LOGGED_USER, JSON.stringify(res.user));
        //   this.toasterservice.success("User Saved Successfully");
        //   this.router.navigateByUrl(`Dashboard`);
        // }
      //  })
  }
  onSaveUsernameChanged(event:any){

  }
}

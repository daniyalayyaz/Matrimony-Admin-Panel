import { Component, ViewChild } from '@angular/core';
// import { NgForm, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { PagesService } from 'app/shared/services/pages.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  loginFormSubmitted = false;
  isLoginFailed = false;

  loginForm = new FormGroup({
    username: new FormControl('guest@apex.com', [Validators.required]),
    password: new FormControl('Password', [Validators.required]),
    rememberMe: new FormControl(true)
  });


  constructor(private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService,
    private pagesService: PagesService,) {
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    console.log(this.loginForm.value);

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    if (this.loginForm.value.username === "guest@apex.com" && this.loginForm.value.password === "Password") {
      this.authService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
        .then((res) => {
          this.spinner.hide();
          this.router.navigate(['/dashboard/dashboard1']);
        })
        .catch((err) => {
          this.isLoginFailed = true;
          this.spinner.hide();
          // console.log('error: ' + err)
          console.log("this Sub Admin login");
        }
        );
    } else {
      this.pagesService.getSubAdminByName(this.loginForm.value.username).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem("LoggedUser",JSON.stringify(res));
        this.spinner.hide();
        if (res === null) {
          console.log("Admin not found");
          this.isLoginFailed = true;
        } else {
          this.router.navigate(['/dashboard/dashboard1']);
        }
      })
    }
  }
}

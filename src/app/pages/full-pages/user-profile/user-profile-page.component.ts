import { Component, OnInit } from '@angular/core';
import { UserProfilePageService } from 'app/shared/services/user-profile-page.service';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { PackageService } from 'app/dashboard/package.service';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit {
  data: any;
  id: any;
  activeUpdate: any;
  activeTrue: any = true;
  activeFalse: any = false
  allPackage: any = [];
  searchValue: any;
  mainData: any;

  constructor(
    private userProfilePage: UserProfilePageService,
    private packageService: PackageService,
    private router: Router, private activateRoute: ActivatedRoute,
  ) {
  }
  
  ngOnInit() {
    console.log("This is component");
    this.get();
    this.getPackage()
  }
  get() {
    this.userProfilePage.get().then((res: []) => {
      this.data = res;
      this.mainData = res;
      console.log(res);
    });

  };
  getpackage(){
    this.userProfilePage.getPackageById(this.mainData).subscribe((response:any)=>{
      console.log(response);
      
    })
  }
  searchFunction() {
    this.data = this.mainData;
    if (this.searchValue) {
      let filtered = this.data.filter((user: any) => {
        if (user.name) {
          if (user.name.includes(this.searchValue) || user.email.includes(this.searchValue) ||
            user.personalContact.includes(this.searchValue)) {
            return user;
          }
        }
      });
      this.data = filtered;
    }
  }
  block(user: any) {
    console.log(user);
    this.userProfilePage.block(user._id).then((res: any) => {
      // this.data = res;
      console.log(res);
    })
  }
  delete(user: any) {
    console.log(user);
    if (confirm("Are you sure to delete " + user.name)) {
      this.data = this.data.filter(_user => _user._id !== user._id);
      this.userProfilePage.delete(user._id).then((res: any) => {
        console.log(res);
        if (res.message === "User has been deleted") {
          console.log("Filter local");
          this.data = this.data.filter(_user => _user._id !== user._id);
        }
      })
    }
  }
  profilestatus(value: any) {
    if (value.active == true) {
      this.activeUpdate = this.activeTrue
    } else {
      this.activeUpdate = this.activeFalse
    }
    console.log(this.activeUpdate)
    this.userProfilePage.update(value._id, this.activeUpdate).then((res: any) => {
      this.data = res
    });
  }
  getPackage() {
    this.packageService.getPackage().then((res: any) => {
      this.allPackage = res
    });
  };
  packageLoad(id: any) {
    this.router.navigate(['pages/package', id._id]);
  }
} 

import { Component, OnInit } from '@angular/core';
import { UserProfilePageService } from 'app/shared/services/user-profile-page.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PackageService } from 'app/dashboard/package.service';
import { Role } from 'app/pages/_model/role';
import { PagesService } from 'app/shared/services/pages.service';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './sub-admin-list.component.html',
  styleUrls: [ './sub-admin-list.component.html']
})

export class SubAdminListComponent implements OnInit {
  data: any;
  id: any;
  activeUpdate: any;
  activeTrue: any = true;
  activeFalse: any = false
  allPackage: any = [];
  complainedUsers: any = [];
  searchValue: any;
  mainData: any;
  placement = "bottom-left";
  currentFilter = "All";
  showReported = false;
  allReports: any = [];
  userReports: any = [];
  adminList: any;

  constructor(
    private userProfilePage: UserProfilePageService,
    private packageService: PackageService,
    private router: Router, private activateRoute: ActivatedRoute,
    private pagesService: PagesService
  ) {
  }
  ngOnInit() {
    // this.getAllReports();
    // this.get();
    // this.getPackage();
    this.SubAdminList()
  }
  // get() {

  //   // copy
  //   this.userProfilePage.get().then((res: []) => {
  //     console.log(res);
  //     this.adminList = res;
  //     let filtered = this.adminList.filter((user: any) => {
  //       if (user.role?.includes(Role.Admin)) {
  //         return user;
  //       }
  //     });
  //     console.log(filtered);
  //     this.data = filtered;
  //   });
  // };
  urlrouting(){
    this.router.navigate(['/pages/sub-admin-register']);
  }
  SubAdminList(){
    this.pagesService.getSubAdminList().then((res:any)=>{
      console.log(res);
      this.data = res;
      
    })
  }
  edit(id: any) {
    console.log(id);
    
    this.router.navigate(['/pages/sub-admin-edit',id._id]);
  }
  // searchFunction(filter: any) {
  //   this.data = this.mainData;
  //   this.showReported = false;
  //   if (filter) {
  //     this.currentFilter = filter;
  //   }
  //   if (this.currentFilter === "All") {
  //     this.data = this.mainData;
  //   } else if (this.currentFilter === "Active") {
  //     let filtered = this.data.filter((user: any) => user.active);
  //     this.data = filtered;
  //   } else if (this.currentFilter === "In-Active") {
  //     let filtered = this.data.filter((user: any) => !user.active);
  //     this.data = filtered;
  //   } else if (this.currentFilter === "Reported") {
  //     let filtered = this.data.filter((user: any) => this.complainedUsers.includes(user._id));
  //     this.data = filtered
  //     this.showReported = true;
  //   } else if (this.currentFilter === "Premium") {
  //     let filtered = this.data.filter((user: any) => user.package);
  //     this.data = filtered;
  //   }
  //   if (this.searchValue) {
  //     let filtered = this.data.filter((user: any) => {
  //       if (user.name) {
  //         if (user.name?.includes(this.searchValue) || user.email?.includes(this.searchValue) ||
  //           user.personalContact?.includes(this.searchValue)) {
  //           return user;
  //         }
  //       }
  //     });
  //     this.data = filtered;
  //   }
  // };
  // block(user: any) {
  //   this.userProfilePage.block(user._id).then((res: any) => {
  //     // this.data = res;
  //   })
  // }
  deleteSubAdmin(user: any) {
    if (confirm("Are you sure to delete " + user.name)) {
      this.data = this.data.filter(_user => _user._id !== user._id);
      this.pagesService.deleteSubAdmin(user._id).then((res: any) => {
        if (res.message === "User has been deleted") {
          this.data = this.data.filter(_user => _user._id !== user._id);
        }
      })
    }
  }
  profilestatus(value: any) {
    // if (value.active == true) {
    //   this.activeUpdate = this.activeTrue
    // } else {
    //   this.activeUpdate = this.activeFalse
    // }
    console.log(value);
    
    // console.log(this.activeUpdate)
    // this.userProfilePage.update(value._id, this.activeUpdate).then((res: any) => {
    //   this.data = res
    // });
  }
  // getPackage() {
  //   this.packageService.getPackage().then((res: any) => {
  //     this.allPackage = res
  //   });
  // };
  // packageLoad(id: any) {
  //   this.router.navigate(['pages/package', id._id]);
  // };
  // getAllReports() {
  //   this.userProfilePage.getReports().then((res: any) => {
  //     this.allReports = res;
  //     this.complainedUsers = res.map((report: any) => report.complainedId);
  //   })
  // };
  // viewReport(_userId: any) {
  //   console.log("View report", this.allReports, _userId);
  //   const _userReports = this.allReports.filter((report: any)=> report.complainedId === _userId);
  //   console.log(_userReports);
  //   // const reportsWithUser = _userReports.map((element : any) => {
  //   //   const userDetail = this.getUser("63ca7222b9f8c66c6681daa3");
  //   //   console.log(userDetail);  
  //   // });
  //   // console.log(reportsWithUser);
  //   this.userReports = _userReports;
  //   let reportList = '';
  //   for (let i = 0; i < _userReports.length; i++) {
  //     reportList += `<li class='border text-left my-1'><span class='font-weight-bold'> Name:</span> ${_userReports[i].complainerName} <br> <span class='font-weight-bold'> Report: </span>${_userReports[i].report}</li>`;
  //   }
  //   Swal.fire({
  //     title: 'Reports',
  //     icon: 'info',
  //     html: `<ul> ${reportList} </ul>`,
  //     confirmButtonText: 'OK',
  //     confirmButtonColor: "#2f8be6"
  //   });
  // }
} 

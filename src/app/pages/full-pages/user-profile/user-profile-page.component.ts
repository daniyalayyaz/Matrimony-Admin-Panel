import { Component, OnInit } from '@angular/core';
import { UserProfilePageService } from 'app/shared/services/user-profile-page.service';
import Swal from 'sweetalert2';
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
  complainedUsers: any = [];
  searchValue: any;
  mainData: any;
  placement = "bottom-left";
  currentFilter = "All";
  showReported = false;
  allReports: any = [];
  userReports: any = [];
  blockedUsers: any;
  showBlocked = false;
  constructor(
    private userProfilePage: UserProfilePageService,
    private packageService: PackageService,
    private router: Router, private activateRoute: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.getAllReports();
    this.get();
    this.getPackage();
  }
  get() {
    this.userProfilePage.get().then((res: []) => {
      let reported = res.map((user: any) => {
        let reportedUser = user
        if (this.complainedUsers.includes(user._id)) {
          reportedUser = { ...user, reported: true }
        }
        return reportedUser;
      });
      this.data = reported;
      this.mainData = reported;
    });
  };
  searchFunction(filter: any) {
    this.data = this.mainData;
    this.showReported = false;
    this.showBlocked = false;
    if (filter) {
      this.currentFilter = filter;
    }
    if (this.currentFilter === "All") {
      this.data = this.mainData;
    } else if (this.currentFilter === "Active") {
      let filtered = this.data.filter((user: any) => user.active);
      this.data = filtered;
    } else if (this.currentFilter === "In-Active") {
      let filtered = this.data.filter((user: any) => !user.active);
      this.data = filtered;
    } else if (this.currentFilter === "Reported") {
      let filtered = this.data.filter((user: any) => this.complainedUsers.includes(user._id));
      this.data = filtered
      this.showReported = true;
    } else if (this.currentFilter === "Premium") {
      let filtered = this.data.filter((user: any) => user.package);
      this.data = filtered;
    } else if (this.currentFilter === "Blocked") {
      const filtered = this.data.filter(element => {
        return this.data.some(elem => elem.Block.includes(element._id));
      });
      console.log(filtered);
      this.data = filtered;
      this.showBlocked = true;
    } else if(this.currentFilter === "DeleteRequested"){
      const filtered = this.data.filter((_user) => !_user.requestToDelete);
      this.data = filtered;
    }
    if (this.searchValue) {
      const filtered = this.data.filter(element => {
        return this.data.some(elem => elem.Block.includes(element._id));
      });
      console.log(filtered);
      this.data = filtered;
    }
  };
  block(user: any) {
    this.userProfilePage.block(user._id).then((res: any) => {
      // this.data = res;
    })
  }
  delete(user: any) {
    if (confirm("Are you sure to delete " + user.name)) {
      this.data = this.data.filter(_user => _user._id !== user._id);
      this.userProfilePage.delete(user._id).then((res: any) => {
        if (res.message === "User has been deleted") {
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
    });
  }
  getPackage() {
    this.packageService.getPackage().then((res: any) => {
      this.allPackage = res
    });
  };
  packageLoad(id: any) {
    this.router.navigate(['pages/package', id._id]);
  };
  getAllReports() {
    this.userProfilePage.getReports().then((res: any) => {
      this.allReports = res;
      this.complainedUsers = res.map((report: any) => report.complainedId);
    })
  };
  viewReport(_userId: any) {
    console.log("View report", this.allReports, _userId);
    const _userReports = this.allReports.filter((report: any)=> report.complainedId === _userId);
    console.log(_userReports);
    // const reportsWithUser = _userReports.map((element : any) => {
    //   const userDetail = this.getUser("63ca7222b9f8c66c6681daa3");
    //   console.log(userDetail);  
    // });
    // console.log(reportsWithUser);
    this.userReports = _userReports;
    let reportList = '';
    for (let i = 0; i < _userReports.length; i++) {
      reportList += `<li class='border text-left my-1'><span class='font-weight-bold'> Name:</span> ${_userReports[i].complainerName} <br> <span class='font-weight-bold'> Report: </span>${_userReports[i].report}</li>`;
    }
    Swal.fire({
      title: 'Reports',
      icon: 'info',
      html: `<ul> ${reportList} </ul>`,
      confirmButtonText: 'OK',
      confirmButtonColor: "#2f8be6"
    });
  }
  viewBlocked(_userId: any) {
    console.log(_userId);
    const _blockedBy = this.mainData.filter((_user: any) => _user.Block.includes(_userId));
    console.log(_blockedBy);
    let usersList = '';
    for(let i = 0; i < _blockedBy.length; i++){
      usersList += `<li class='border text-left my-1'><span class='font-weight-bold'> Name:</span> ${_blockedBy[i].name.charAt(0).toUpperCase() + _blockedBy[i].name.slice(1)}</li>`
    }
    Swal.fire({
      title: 'Blocked By',
      icon: 'info',
      html: `<ul> ${usersList} </ul>`,
      confirmButtonText: 'OK',
      confirmButtonColor: "#2f8be6"
    })
  }
} 

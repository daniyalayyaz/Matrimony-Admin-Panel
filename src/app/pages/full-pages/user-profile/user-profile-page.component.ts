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
  user: any = []
  blockedUsers: any;
  showBlocked = false;
  editAccess: Boolean = true;

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
    let user;
    user = localStorage.getItem("LoggedUser")
    user = JSON.parse(user);
    if(user && !user.edit){
      console.log("hello");
      
      this.editAccess = false;
    }else{
      console.log(this.editAccess);
      
    }
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
    } else if (this.currentFilter === "DeleteRequested") {
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
    const _userReports = this.allReports.filter((report: any) => report.complainedId === _userId);
    console.log(_userReports);
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
    for (let i = 0; i < _blockedBy.length; i++) {
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
  viewUserInformation(_userId: any) {
    console.log("View Details", this.mainData, _userId);
    const _user = this.mainData.filter((user: any) => user._id === _userId);
    console.log(_user);
    this.user = _user;
    let userDetails = '';
    for (let i = 0; i < _user.length; i++) {
      userDetails +=
        `
        <div class="row">
            <div class="col-lg-6">
            <div class=' text-left my-1'>
            <span class='font-weight-bold'> Name:</span> ${_user[i].name} <br> 
            <span class='font-weight-bold'> Email: </span> ${_user[i].email} <br>
            <span class='font-weight-bold'> Phone: </span> ${_user[i].personalContact} <br>
            <span class='font-weight-bold'> Age: </span> ${_user[i].age} <br>
            <span class='font-weight-bold'> Gender: </span> ${_user[i].gender} <br>
            </div>
            <div class=' text-left my-1'>
            <span class='font-weight-bold'> Country: </span> ${_user[i].country} <br>
            <span class='font-weight-bold'> Height: </span> ${_user[i].height} <br>
            <span class='font-weight-bold'> Province: </span> ${_user[i].province} <br>
            <span class='font-weight-bold'> House: </span> ${_user[i].house} <br>
            <span class='font-weight-bold'> City: </span> ${_user[i].city} <br>
            <span class='font-weight-bold'> Religious: </span> ${_user[i].religious} <br>
            </div>
            <div class=' text-left my-1'>
            <span class='font-weight-bold'> Build:</span> ${_user[i].build} <br> 
            <span class='font-weight-bold'> FamilyInfo: </span> ${_user[i].familyInfo} <br>
            <span class='font-weight-bold'> Hobbies: </span> ${_user[i].hobbies} <br>
            <span class='font-weight-bold'> Looks: </span> ${_user[i].looks} <br>
            <span class='font-weight-bold'> Cast: </span> ${_user[i].cast} <br>
            <span class='font-weight-bold'> JobStatus: </span> ${_user[i].jobStatus} <br>
            </div>
            </div>
            <div class="col-lg-6">
            <div class=' text-left my-1'>
      <span class='font-weight-bold'> MontherTonque:</span> ${_user[i].montherTonque} <br> 
      <span class='font-weight-bold'> MotherOccuption: </span> ${_user[i].motherOccuption} <br>
      <span class='font-weight-bold'> Nationality: </span> ${_user[i].nationality} <br>
      <span class='font-weight-bold'> ParentContact: </span> ${_user[i].parentContact} <br>
      <span class='font-weight-bold'> FatherOccuption: </span> ${_user[i].fatherOccuption} <br>
      <span class='font-weight-bold'> SocialLinkInsta: </span> ${_user[i].socialLinkInsta} <br>
      <span class='font-weight-bold'> SocialLinkFb: </span> ${_user[i].socialLinkFb} <br>
      </div>
      <div class=' text-left my-1'>
      <span class='font-weight-bold'> Sect:</span> ${_user[i].sect} <br> 
      <span class='font-weight-bold'> SiblingsCountBrothers: </span> ${_user[i].siblingsCountBrothers} <br>
      <span class='font-weight-bold'> SiblingsCountSisters: </span> ${_user[i].siblingsCountSisters} <br>
      <span class='font-weight-bold'> ReligiousStatus: </span> ${_user[i].religiousStatus} <br>
      <span class='font-weight-bold'> SocialLinkTwitter: </span> ${_user[i].socialLinkTwitter} <br>
      </div>
      <div class=' text-left my-1'>
      <span class='font-weight-bold'> ProfessionalInfo:</span> ${_user[i].professionalInfo} <br> 
      <span class='font-weight-bold'> Professional: </span> ${_user[i].professional} <br>
      <span class='font-weight-bold'> Qualification: </span> ${_user[i].qualification} <br>
      <span class='font-weight-bold'> SocialEconomic: </span> ${_user[i].socialEconomic} <br>
      </div>
            </div
        <div>
      `;
    }
    Swal.fire({
      title: 'Details',
      width: 800,
      icon: 'info',
      html: `<ul> ${userDetails} </ul>`,
      confirmButtonText: 'OK',
      confirmButtonColor: "#2f8be6",
      
    });
  }
} 

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from 'app/dashboard/package.service';
import { UserProfilePageService } from 'app/shared/services/user-profile-page.service';

@Component({
  selector: 'app-packagelistforassign',
  templateUrl: './packagelistforassign.component.html',
  styleUrls: ['./packagelistforassign.component.scss']
})
export class PackagelistforassignComponent implements OnInit {

  data: any = [];
  list:any
  id: any;
  
  constructor(private packageService: PackageService,private userProfilePage:UserProfilePageService,
    private router: Router,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.get();
  }
  get() {
    this.packageService.getPackage().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  notificationAdd(){
    let view = true;
    let description =  "Congratulations your package has been activated now you can send interests and messages";
    let emptyObject = '';
    this.packageService.notificationAdd(this.id,emptyObject,view,description).subscribe((res:any)=>{

    })
  }
  // edit(id: any) {
  //   this.router.navigate(['/setting/build-edit', id._id]);
  // }
  urlrouting(){
    this.router.navigate(['/dashboard/packageForm']);
  }
  assign(data:any){
    this.notificationAdd();
    console.log(data);
    this.userProfilePage.updatePackge(this.id,data).then((res: any) => {
      console.log(res);
      this.data = res
      
    });
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from 'app/dashboard/package.service';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {

  data: any = [];
  list:any
  editAccess: Boolean = true;
  
  constructor( private packageService:PackageService,private router: Router) { }

  ngOnInit(): void {

    this.get();
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
    this.packageService.getPromotion().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 

  edit(id: any) {
    this.router.navigate(['/dashboard/promotionEdit', id._id]);
  }
  delete(p: any) {
    if (confirm("Are you sure to delete " + p.name)) {
      this.data = this.data.filter(_user => _user._id !== p._id);
      this.packageService.deletePromotion(p._id).then((res: any) => {
        console.log(res);
        if (res.message === "Promotion has been deleted") {
          console.log("Filter local");
          this.data = this.data.filter(_user => _user._id !== p._id);
        }
      })
    }
  };
  
  urlrouting(){
    this.router.navigate(['/dashboard/promotionForm']);
  }


}

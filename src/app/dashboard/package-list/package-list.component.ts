import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {

  data: any = [];
  list:any
  
  constructor(private packageService: PackageService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.packageService.getPackage().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 

  // edit(id: any) {
  //   this.router.navigate(['/setting/build-edit', id._id]);
  // }
  delete(p: any) {
    if (confirm("Are you sure to delete " + p.name)) {
      this.data = this.data.filter(_user => _user._id !== p._id);
      this.packageService.deletePackage(p._id).then((res: any) => {
        console.log(res);
        if (res.message === "Package has been deleted") {
          console.log("Filter local");
          this.data = this.data.filter(_user => _user._id !== p._id);
        }
      })
    }
  };
  
  urlrouting(){
    this.router.navigate(['/dashboard/packageForm']);
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildService } from '../services/Build.service';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss']
})
export class BuildListComponent implements OnInit {

  data: any = [];
  list:any
  
  constructor(private buildService: BuildService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.buildService.getBuild().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.buildService.deleteBuild(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['/setting/build-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['/setting/build']);
  }

}

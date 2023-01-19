import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  data: any = [];
  list:any
  
  
  
  constructor(private houseService: HouseService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.houseService.getHouse().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.houseService.deleteHouse(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/house-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/house']);
  }
}

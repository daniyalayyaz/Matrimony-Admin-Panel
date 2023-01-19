import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinvcesService } from '../services/provinvces.service';

@Component({
  selector: 'app-provinvces-list',
  templateUrl: './provinvces-list.component.html',
  styleUrls: ['./provinvces-list.component.scss']
})
export class ProvinvcesListComponent implements OnInit {

  data: any = [];
  list:any
  
  constructor(private provinvcesService: ProvinvcesService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.provinvcesService.getProvinvces().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.provinvcesService.deleteProvinvces(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/provinvces-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/provinvces']);
  }

}

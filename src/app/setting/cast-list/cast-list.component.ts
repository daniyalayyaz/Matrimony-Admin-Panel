import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastService } from '../services/cast.service';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.scss']
})
export class CastListComponent implements OnInit {

  data: any = [];
  list:any
  
  constructor(private castService: CastService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.castService.getCast().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.castService.deleteCast(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/cast-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/cast']);
  }

}

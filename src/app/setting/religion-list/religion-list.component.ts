import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReligionService } from '../services/religion.service';

@Component({
  selector: 'app-religion-list',
  templateUrl: './religion-list.component.html',
  styleUrls: ['./religion-list.component.scss']
})
export class ReligionListComponent implements OnInit {

 

  data: any = [];
  list:any
  constructor(private religionService: ReligionService,  private router: Router) { }

  ngOnInit(): void {

    this.getReligion();
  }
  getReligion() {
    this.religionService.getReligion().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.religionService.deleteReligion(id._id).then(
      res => {
        console.log(res);
        this.getReligion();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/religion-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/religion']);
  }

}

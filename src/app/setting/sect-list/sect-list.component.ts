import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectService } from '../services/sect.service';

@Component({
  selector: 'app-sect-list',
  templateUrl: './sect-list.component.html',
  styleUrls: ['./sect-list.component.scss']
})
export class SectListComponent implements OnInit {

  data: any = [];
  list:any
  Sect
  constructor(private sectService: SectService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.sectService.getSect().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.sectService.deleteSect(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['/setting/sect-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/sect']);
  }
}

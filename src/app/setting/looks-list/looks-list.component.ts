import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LooksService } from '../services/looks.service';

@Component({
  selector: 'app-looks-list',
  templateUrl: './looks-list.component.html',
  styleUrls: ['./looks-list.component.scss']
})
export class LooksListComponent implements OnInit {

  data: any = [];
  list:any
  
  
  constructor(private looksService: LooksService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.looksService.getLooks().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.looksService.deleteLooks(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/looks-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/looks']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplexionService } from '../services/complexion.service';

@Component({
  selector: 'app-complexion-list',
  templateUrl: './complexion-list.component.html',
  styleUrls: ['./complexion-list.component.scss']
})
export class ComplexionListComponent implements OnInit {


  data: any = [];
  list:any
  
  
  constructor(private complexionService: ComplexionService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.complexionService.getComplexion().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.complexionService.deleteComplexion(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/complexion-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/complexion']);
  }

}

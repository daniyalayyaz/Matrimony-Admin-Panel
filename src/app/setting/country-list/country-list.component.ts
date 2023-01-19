import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {


  data: any = [];
  list:any
  
  
  constructor(private counrtyService: CountryService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.counrtyService.getCountry().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.counrtyService.deleteCountry(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/country-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/country']);
  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotherLanguageService } from '../services/mother-language.service';

@Component({
  selector: 'app-mother-language-list',
  templateUrl: './mother-language-list.component.html',
  styleUrls: ['./mother-language-list.component.scss']
})
export class MotherLanguageListComponent implements OnInit {

  data: any = [];
  list:any
  
  constructor(private motherLanguageService:MotherLanguageService,  private router: Router) { }

  ngOnInit(): void {

    this.get();
  }
  get() {
    this.motherLanguageService.getMotherLanguage().then((res: any) => {
      console.log(res);
      this.data = res
    });
  };
 
  delete(id: any): void {
    this.motherLanguageService.deleteMotherLanguage(id._id).then(
      res => {
        console.log(res);
        this.get();
      }, err => { console.log(err) }
    )
  };
  edit(id: any) {
    this.router.navigate(['setting/motherlanguage-edit', id._id]);
  }
  urlrouting(){
    this.router.navigate(['setting/motherlanguage']);
  }
}

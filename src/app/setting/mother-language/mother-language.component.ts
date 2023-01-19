import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MotherLanguageService } from '../services/mother-language.service';

@Component({
  selector: 'app-mother-language',
  templateUrl: './mother-language.component.html',
  styleUrls: ['./mother-language.component.scss']
})
export class MotherLanguageComponent implements OnInit {

  showSucessMessage: any;
  serverErrorMessages: any;
  motherLanguage: any = [];

 
  result: any;
  constructor(
    public motherLanguageService: MotherLanguageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.motherLanguageService.addMotherLanguage(form.value).then
      (
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 10000);
          this.result = res;
          this.router.navigate(['setting/motherlanguage-list']);
          console.log(this.result)
        },
        err => {
          {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br/>')
              setTimeout(() => this.serverErrorMessages = false, 10000);
            }
            else
              this.serverErrorMessages = 'Something wrong .please contect admin .'
            setTimeout(() => this.serverErrorMessages = false, 10000);
          }
        },
      ).catch((err) => {
        console.log(err);
      })
  }

}

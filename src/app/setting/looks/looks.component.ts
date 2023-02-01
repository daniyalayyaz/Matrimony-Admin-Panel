import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LooksService } from '../services/looks.service';

@Component({
  selector: 'app-looks',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.scss']
})


export class LooksComponent implements OnInit {
  showSucessMessage: any;
  serverErrorMessages: any;
  looks: any = [];

 
  result: any;
  constructor(
    public looksService: LooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.looksService.addLooks(form.value).then
      (
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 10000);
          this.result = res;
          this.router.navigate(['setting/looks-list']);
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

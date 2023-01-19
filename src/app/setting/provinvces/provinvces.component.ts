import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvinvcesService } from '../services/provinvces.service';
import { ReligionService } from '../services/religion.service';
@Component({
  selector: 'app-provinvces',
  templateUrl: './provinvces.component.html',
  styleUrls: ['./provinvces.component.scss']
})
export class ProvinvcesComponent implements OnInit {
  showSucessMessage: any;
  serverErrorMessages: any;
  provinvces: any = [];

 
  result: any;
  constructor(
    public provinvcesService: ProvinvcesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.provinvcesService.addProvinvces(form.value).then
      (
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 10000);
          this.result = res;
          this.router.navigate(['setting/provinvces-list']);
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
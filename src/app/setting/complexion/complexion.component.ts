import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplexionService } from '../services/complexion.service';

@Component({
  selector: 'app-complexion',
  templateUrl: './complexion.component.html',
  styleUrls: ['./complexion.component.scss']
})
export class ComplexionComponent implements OnInit {
  showSucessMessage: any;
  serverErrorMessages: any;
  complexion: any = [];

 
  result: any;
  constructor(
    public complexionService: ComplexionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.complexionService.addComplexion(form.value).then
      (
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 10000);
          this.result = res;
          this.router.navigate(['setting/complexion-list']);
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
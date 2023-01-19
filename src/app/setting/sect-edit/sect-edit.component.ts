import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SectService } from '../services/sect.service';

@Component({
  selector: 'app-sect-edit',
  templateUrl: './sect-edit.component.html',
  styleUrls: ['./sect-edit.component.scss']
})
export class SectEditComponent implements OnInit {

  id: any;
  edititem: any = [];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })
  serverErrorMessages: any;
  updateitem: any = [];
  constructor(private activateRoute: ActivatedRoute, private router: Router, 
    private service: SectService) {
  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.edit();

  }
  edit() {
    this.service.getSectById(this.id).then((res) => {
      console.log(res);
      this.edititem = res;
    })
  }
  async update() {
    this.service.updateSect(this.id, this.form.value).then((res) => {
      console.log(res);
      this.updateitem = res;
      this.router.navigate(['/setting/sect-list']);
    }
    ).catch((err) => {
      {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>')
          setTimeout(() => this.serverErrorMessages = false, 10000);
        }
        else
          this.serverErrorMessages = 'Something wrong .please contect admin .'
        setTimeout(() => this.serverErrorMessages = false, 10000);
      }
    })
  }
}

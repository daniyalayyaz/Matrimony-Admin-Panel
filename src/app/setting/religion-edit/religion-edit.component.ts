import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReligionService } from '../services/religion.service';

@Component({
  selector: 'app-religion-edit',
  templateUrl: './religion-edit.component.html',
  styleUrls: ['./religion-edit.component.scss']
})
export class ReligionEditComponent implements OnInit {

  id: any;
  edititem: any = [];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })
  serverErrorMessages: any;
  updateitem: any = [];
  constructor(private activateRoute: ActivatedRoute, private router: Router, 
    private service: ReligionService) {
  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.edit();

  }
  edit() {
    this.service.getReligionById(this.id).then((res) => {
      console.log(res);
      this.edititem = res;
    })
  }
  async update() {
    this.service.updateReligion(this.id, this.form.value).then((res) => {
      console.log(res);
      this.updateitem = res;
      this.router.navigate(['/setting/religion-list']);
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

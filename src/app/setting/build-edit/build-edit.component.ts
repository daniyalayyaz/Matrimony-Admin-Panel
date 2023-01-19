import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildService } from '../services/Build.service';


@Component({
  selector: 'app-build-edit',
  templateUrl: './build-edit.component.html',
  styleUrls: ['./build-edit.component.scss']
})
export class BuildEditComponent implements OnInit {
  id: any;
  edititem: any = [];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })
  serverErrorMessages: any;
  updateitem: any = [];
  constructor(private activateRoute: ActivatedRoute, private router: Router, 
    private service: BuildService) {
  }
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id);
    this.edit();

  }
  edit() {
    this.service.getBuildById(this.id).then((res) => {
      console.log(res);
      this.edititem = res;
    })
  } 
  async update() {
    this.service.updateBuild(this.id, this.form.value).then((res) => {
      console.log(res);
      this.updateitem = res;
      this.router.navigate(['/setting/build-list']);
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

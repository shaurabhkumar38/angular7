import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      department-detail works! {{departId}}</h3>
      <p>
      <button (click)="overview()">Overview</button>
      <button (click)="contact()">Contact</button>
      </p>
      <router-outlet></router-outlet>
      <p>
      <button (click)="previous()">Previous</button>
      <button (click)="next()">Next</button>
    </p>
    <button (click)="back()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  //let id = parseInt(this.route.snapshot.paramMap.get('id'));
  //this.departId = id;
  this.route.paramMap.subscribe((params: ParamMap) =>{
  let id = parseInt(params.get('id'));
  this.departId = id;
  });
  }

  previous(){
  let previd = this.departId - 1;
  this.router.navigate(['/department', previd]);
  }

  next(){
  let nextid = this.departId + 1;
  this.router.navigate(['/department', nextid]);
  }

  back(){
  let selid = this.departId ? this.departId : null;
 // this.router.navigate(['/department', {id: selid}]);
 this.router.navigate(['../', {id: selid}], {relativeTo: this.route});
  }

  overview(){
  this.router.navigate(['overview'], {relativeTo: this.route});
  }

  contact(){
  this.router.navigate(['contact'], {relativeTo: this.route});
  }
}

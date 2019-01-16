import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul *ngFor="let dep of departments">
    <li (click)="onSelect(dep)" [class.selected]="isSelected(dep)">{{dep.name}}</li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
public selectid;

  departments = [
  {"id":1, "name":"shaurabh"},
  {"id":2, "name":"amit"},
  {"id":3, "name":"raju"},
  {"id":4, "name":"sanju"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.paramMap.subscribe((params: ParamMap) =>{
  let id = parseInt(params.get('id'));
  this.selectid = id;
  });
  }

  onSelect(dep){
  //this.router.navigate(['/department-list', dep.id]);
  this.router.navigate([dep.id], {relativeTo: this.route});
  }

  isSelected(dep){
  return dep.id === this.selectid;
  }

}

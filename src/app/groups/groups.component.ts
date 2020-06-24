import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../services/groups.service';
import {Group} from '../services/groups.service'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public xmber:Group[]
  public inp:{name:string,surname:string} []
  public sinp:string
  constructor(private Groups:GroupsService) { }

  ngOnInit(): void {
    this.xmber=this.Groups.getGroups().sort((a,b)=>b.student.length-a.student.length)
    this.inp=this.Groups.getInpVal()
    this.sinp=this.Groups.getSearchInp()
  }
  addStudent(i){
    this.Groups.addSt(i)
  }
  delGroup(i){
    this.Groups.deleteGroup(i)
  }
  delStud(i,s){
    this.Groups.deleteStud(i,s)
  }

}

import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../services/groups.service';
import {Group} from '../services/groups.service'
@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  public xumbInp:Group
  public lecturers:string[]
  constructor(private Xumb:GroupsService) { }

  ngOnInit(): void {
    this.xumbInp=this.Xumb.groupInp
    console.log(this.Xumb.lec);
    
    this.lecturers=this.Xumb.lec
  }
  addGroup():void{
    this.Xumb.addGr(this.xumbInp)
    this.xumbInp={groupName:"",directions:"",groupLecturer:"",student:[]}
  }

}

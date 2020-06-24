import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  public groups: Group[]=[
    new Group("A1","FullStack","Gayane",[new Student("Ani","Sargsyan"),new Student("Levon","Grigoryan"),new Student("Hayk","Vardanyan")]),
    new Group("B6","Frontend","Alla",[new Student("Lianna","SaMadoyanrgsyan"),new Student("Manuk","Poxosyan")]),
    new Group("G6","Backend","Gevorg",[new Student("Nune","Grigoryan"),new Student("Hrayr","Harutyunyan"),new Student("Hayk","Vardanyan"),new Student("Mher","Aleqsanyan")])
  ]
  public lec: string[] = ["Gayane","Alla","Gevorg","Ashot","Hasmik"]
  public inpVal:{name:string,surname:string}[]=[]
  public groupInp: Group ={groupName:"",directions:"",groupLecturer:"",student:[]}
  public searchInp:string=""
  constructor() {
    this.groups.forEach((r)=>this.inpVal.push({name:"",surname:""}))
  }
  getSearchInp(){
    return this.searchInp
  }
  getGroups(){
    return this.groups
  }
  deleteGroup(i){
    this.groups.splice(i, 1);
  }
  deleteStud(i,s){
    this.groups[i].student.splice(this.groups[i].student.indexOf(s),1)   
  }
  getInpVal(){
    return this.inpVal 
  }
  addSt(i){
    this.groups[i].student.push(this.inpVal[i]) 
    this.inpVal[i]={name:"",surname:""}
  }
  addGr(x){
    this.groups.push(x)
    this.inpVal.push({name:"",surname:""})

  }
}

class Student {
  public name:string
  public surname:string
  constructor(a:string,b:string){ 
    this.name=a
    this.surname=b
  }
}


 export class Group{
  public groupName:string
  public directions:string
  public groupLecturer:string
  public student:Student[]
  constructor(a:string,b:string,c:string,d:Student[]){
    this.groupName=a
    this.directions=b
    this.groupLecturer=c
    this.student=d
  }

}
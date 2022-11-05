import { addExpence } from './../../model/addExpence';
import { Component, OnInit } from '@angular/core';
import { friendsadd } from 'src/app/model/friendsadd';
import { expencedetail } from 'src/app/model/expencedetail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show:boolean = false;
  showf:boolean = false;
  showdetail:boolean = false;
  paynow:boolean = false;
  localitem:string ="";
  test:string = "hello";
  user:string;
  friendsarr:friendsadd[]=[]
  expence:addExpence[]=[]
  expence2:addExpence[]=[]
  expencedetailsdata:expencedetail;
  amount:number;
  constructor() {
    if(localStorage.getItem('friends')==null) {
      this.friendsarr=[] ;
      console.log("nulll")
      // console.log(this.friendsarr)
    }
    else{
      this.friendsarr=JSON.parse(localStorage.getItem('friends')||"");
      console.log(this.friendsarr)
    }
    if(localStorage.getItem('expences')==null) {
      this.expence=[] ;
      // console.log("nulll")
      // console.log(this.friendsarr)
    }
    else{
      this.expence=JSON.parse(localStorage.getItem('expences')||"");
      console.log(this.friendsarr)
      this.expence2=this.expence;
    }
    this.user=localStorage.getItem('logined');
  }

  ngOnInit(): void {
  }
  open(){
    this.show = !this.show;
  }
  openf(){
    this.showf=!this.showf;
  }
  save(addExpence:addExpence)
  {
    this.expence.push(addExpence);
    localStorage.setItem('expences', JSON.stringify(this.expence))
    this.expence2=this.expence;
  }
  addfriends(friends:friendsadd)
  {
    this.friendsarr.push(friends);
    this.openf()
    localStorage.setItem('friends', JSON.stringify(this.friendsarr))
  }
  deleteFriend(index:number)
  {
    console.log(index);
    this.friendsarr.splice(index, 1);
        localStorage.setItem('friends', JSON.stringify(this.friendsarr))
  }
  deletes(i:number,j:number){
      this.expence[i].friends.splice(j, 1);
      if(this.expence[i].friends.length==0)
      {
        this.expence.splice(i, 1);
      }
      localStorage.setItem('expences', JSON.stringify(this.expence))
  }
  pay(i:number,j:number)
  {
    this.paynow=!this.paynow;
    this.amount=this.expence[i].amount

  }
  details(i:number,j:number)
  {

    const addex={
      friends:this.expence[i].friends[j].friends,
      description:this.expence[i].description,
      catagory:this.expence[i].catagory,
      amount:this.expence[i].amount,
      date:this.expence[i].date
    }
    this.expencedetailsdata=addex;
    this.showdetail=!this.showdetail;
  }
  opendetail()
  {
    this.showdetail=!this.showdetail;
  }
  }



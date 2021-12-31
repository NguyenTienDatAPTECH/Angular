import {Component} from "@angular/core";

@Component({
  selector : "list-customer",
  templateUrl :"./listcustomer.component.html"
})

export class listcustomerComponent{
  created:boolean = false;
  notification:string = "";
  fullname:string = "";
  fullemail:string ="";
  fullphone:string ="";
  fulladdress:string ="";
  fullgender:string ="";
  selectGender:string ="";
  stt =[""];
  name = [""];
  addGender =[""];
  gender = [
    {sex:"Male", value:1},
    {sex:"Female", value: 2}
  ];
  email = [""];
  phone = [""];
  address = [""];
  click(){
    if(this.fullname.length > 0 && this.fullemail.length > 0){
      this.name.push(this.fullname);
      this.email.push(this.fullemail);
      this.address.push(this.fulladdress);
      this.phone.push(this.fullphone);
      this.notification ="Khách hàng "+this.fullname+" đã được tạo!"
      this.created = true;
    } else if(this.fullname.length <= 0 || this.fullemail.length <= 0){
      this.notification = "Khách hàng chưa được khởi tạo!";
    }
    this.fulladdress ="";
    this.fullphone ="";
    this.fullemail ="";
    this.fullname ="";
  }
  getSex(){
    this.addGender.push(this.selectGender);
    this.fullgender = this.selectGender;
    console.log("My input: " +this.selectGender);
  }
  resetGetSex(){
    this.selectGender = "";
  }
}

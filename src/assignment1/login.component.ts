import {Component} from "@angular/core";

@Component({
  selector : "login",
  templateUrl : "./login.component.html"
})

export class loginComponent{
created : boolean = false;
fullname : string;
password : string;
repassword : string;
fullemail : string;
Name : [""];
password : [""];
repassword : [""];
Email : [""];
}

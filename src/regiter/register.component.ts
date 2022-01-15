import {Component,ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "register",
  templateUrl: "register.component.html"
})

export class registerComponent{
  @ViewChild("f") registerform!: NgForm;
  onSubmit(){
    console.log(this.registerform.value);
  }
}

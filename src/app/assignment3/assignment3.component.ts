import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "assignment3",
  templateUrl: "assignment3.component.html"
})

export class assignment3Component{
  @ViewChild("f") loginform! : NgForm;
  onSubmit(){
    console.log(this.loginform.value);
  }
}

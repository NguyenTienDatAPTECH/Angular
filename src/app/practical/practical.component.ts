import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "practical",
  templateUrl : "./practical.component.html"
})

export class practicalComponent{
  @ViewChild("f") formsearch! : NgForm;
  onSubmit (){
    console.log()
  }
}

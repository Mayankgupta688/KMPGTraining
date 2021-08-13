
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.less']
})
export class ReactiveComponent {

  constructor() { }

  employeeDetailsForm = new FormGroup({
    userName: new FormControl("Anshul Gupta", Validators.required),
    userId: new FormControl("40000", Validators.required),
    userCreatedAt: new FormControl("", Validators.required),
    userAvatar: new FormControl("https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", Validators.required)
  });

  ngOnInit() {
    this.employeeDetailsForm.get("userName").valueChanges.subscribe((value) => {
      alert("User Entered: " + value);
      debugger;
    })

    this.employeeDetailsForm.valueChanges.subscribe((data) => {
      debugger;
    })
  }


  submitData() {
    alert(this.employeeDetailsForm.value.userAvatar)
    alert(this.employeeDetailsForm.value.userName)
    alert(this.employeeDetailsForm.value.userId)
    alert(this.employeeDetailsForm.value.userCreatedAt)
  }
}

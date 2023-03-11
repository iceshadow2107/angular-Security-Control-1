import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //constructor(private formBuilder: FormBuilder) { }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private authService: AuthService) {}
  /*
  ngOnInit() {}

  onSubmit() {
    const { username, password } = this.form.value;
    this.authService.login(username, password).subscribe((res: any) => {
      if (res.token) {
        this.router.navigate(['']);
        console.log(123);
      } else {
        console.log('error', res);
      }
    });
  }
}
*/

ngOnInit() {
  }
  login(): void {
   
  }
}
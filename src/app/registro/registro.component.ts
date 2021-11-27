import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRegisterDto } from '../models/dto/auth.dto';
import { AuthService } from '../Services/auth.service';
import { TweetsService } from '../Services/tweets.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    userEmail: new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.minLength(5)
    ]),
    userPassword: new FormControl('')
  });

  constructor(private authService: AuthService, private tweetsService:TweetsService) { }
  tweetList!: any[];

  ngOnInit(): void {
    if(this.authenticated()){
      this.getTweets();
    }
  }

  onSubmit() {
    this.register();
    console.warn(this.registerForm.value);
  }

  register(){
    this.authService.register(this.registerForm.get('userName')?.value,this.registerForm.get('userEmail')?.value,this.registerForm.get('userPassword')?.value).subscribe(res=>{
     localStorage.setItem('auth_token',res.token);
      this.getTweets();
    });
  }

  isInvalid(controlName: string) {
    return this.registerForm.get(controlName)?.invalid && (this.registerForm.get(controlName)?.dirty || this.registerForm.get(controlName)?.touched);
  }

  getTweets(){
    this.tweetsService.getTweets().subscribe(res=>{
      this.tweetList = res;
      console.log(res);
    });
  }
  authenticated(){
    if(localStorage.getItem('auth_token')){
      return true;
  }
  else{
    return false;
  }
}

}

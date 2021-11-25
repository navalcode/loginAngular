import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRegisterDto } from '../models/dto/auth.dto';
import { AuthService } from '../Services/auth.service';


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
    userEmail: new FormControl(''),
    userPassword: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.register();
    console.warn(this.registerForm.value);
  }

  register(){
    this.authService.register(this.registerForm.get('userName')?.value,this.registerForm.get('userEmail')?.value,this.registerForm.get('userPassword')?.value).subscribe(res=>{
      alert(`Te has registrado correctamente y tu token es ${res.token}`)
    });
  }

  isInvalid(controlName: string) {
    return this.registerForm.get(controlName)?.invalid && (this.registerForm.get(controlName)?.dirty || this.registerForm.get(controlName)?.touched);
  }
}

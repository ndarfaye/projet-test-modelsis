import { Component } from '@angular/core';
import {Product} from "./entities/Product";
import {Router} from "@angular/router";
import {AuthentificationService} from "./services/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-test-angular';
  constructor(private router:Router,private authService:AuthentificationService) {
  }
  ngOnInit(): void {
    this.authService.loadAuthenticatedUserFromLocalStorage()
  }


  onLogout(){
    this.authService.removeTokenFromLocalStorage()
    this.router.navigate(['/login'])
  }
}

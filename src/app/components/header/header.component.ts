import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  links: any[] = [
    {name: "Home", path: ''},
    {name: "Login", path: "login"},
    {name: "Register", path: "register"},
    {name: "Card list", path: "cardlist"},

  ]
}

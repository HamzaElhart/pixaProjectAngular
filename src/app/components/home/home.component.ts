import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, BodyComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

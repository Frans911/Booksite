import { routes } from './../../app.routes.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {
  }
  introToForm(){
    this.routes.navigate(['/form'])
  }
}

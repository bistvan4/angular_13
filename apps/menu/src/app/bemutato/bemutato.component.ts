import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bemutato',
  templateUrl: './bemutato.component.html',
  styleUrls: ['./bemutato.component.css']
})
export class BemutatoComponent implements OnInit {
    name: string = "Józsi";
  constructor() { }

  ngOnInit(): void {
  }

}

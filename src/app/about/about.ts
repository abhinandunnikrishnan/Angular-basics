import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [NgClass],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  isActive:boolean=false
  technologies:string[]=[
    "HTML",
    "CSS",
    "Booststrap",
    "Tailwind",
    "Figma",
    "Javascript",
    "React",
    "Express",
    "Node js",
    "MongoDB",
    "Angular"
  ]
  toogleActive(){
    this.isActive=!this.isActive
  }
}

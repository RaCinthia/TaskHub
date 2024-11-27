import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

  // ngOnInit(): void {
  //   window.addEventListener('scroll', ()=> {
  //     let nav = document.querySelector('.nav') as HTMLElement;
  //     nav?.classList.toggle('scrolled', window.scrollY > 0);
  //   });
  // }
  // implements OnInit
}

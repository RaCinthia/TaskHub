import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.forEach((names) => {
            if(names == 'hidden-left') {
              entry.target.classList.add('from-left');;
            } else if(names == 'hidden-right') {
              entry.target.classList.add('from-right');
            };
          });
        } else {
          entry.target.classList.remove('show');
        };
      });
    });

    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => observer.observe(element));
  }
  
}

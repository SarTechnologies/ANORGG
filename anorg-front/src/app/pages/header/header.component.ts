import { Component, OnInit,HostListener,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(event: Event) 
  {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
      document.getElementById('head')?.classList.add('scrolled');

    }
    else if(document.body.scrollTop >= 0 || document.documentElement.scrollTop >= 0)
    {
      document.getElementById('head')?.classList.remove('scrolled');
    }
    else{
      document.body.classList.remove('scrolled');
    }
  }

}

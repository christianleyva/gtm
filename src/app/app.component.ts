import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular con GTM';

  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        //Send Event
        const gtmTag = {
          event: 'view',
          pageName: event.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
}

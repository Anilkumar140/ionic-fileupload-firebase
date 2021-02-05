import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // private router: Router;
  navigate: any;
  activePath = '';
  pages = [
    {
      name: 'Login',
      path: '/details'
    },
    {
      name: 'Register',
      path: '/list'
    },
    {
      name: 'Home',
      path: '/'
    },
   
  ]
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 

 
}

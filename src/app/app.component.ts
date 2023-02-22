import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capApp';

  landscape($event:any){   
    window.screen.orientation.lock('landscape'); 
    console.log("Landscape button is clicked!", $event);    
  } 
  portriat($event:any){   
    window.screen.orientation.lock('portrait');
    console.log("Portriat button is clicked!", $event);    
  } 
  unlock($event:any){   
    window.screen.orientation.unlock(); 
    console.log("unlock button is clicked!", $event);    
  } 

}

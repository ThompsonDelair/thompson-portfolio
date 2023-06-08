import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('headermain')
  headermain!: ElementRef; 
  isCollapsed  = false;

  constructor(){}

  ngAfterViewInit(): void {
    console.log('header size = '+this.headermain.nativeElement.offsetHeight)

    // console.log('header start is: '+this.headermain.nativeElement.)
  }

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event: Event) {
  //   //console.log("scroll event: "+window.scrollY)
  //   const {x,y,right, bottom} = this.headermain.nativeElement.getBoundingClientRect();
  //   //const height = this.headermain.nativeElement.;
  //   if(y == 0){
  //     //console.log('stuck');
  //     environment.sticky = true;
  //   } else {
  //     environment.sticky = false;
  //   }
  //   environment.header_bottom = bottom;

  // }

  scrollToTargetAdjusted(elementName: string): void{
    var element = document.getElementById(elementName);
    var headerOffset = 130;
    var elementPosition = element?.getBoundingClientRect().top;
    var offsetPosition = elementPosition! + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

}

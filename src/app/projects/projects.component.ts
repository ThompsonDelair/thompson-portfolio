import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @ViewChild('projectnav')
  projectnav!: ElementRef; 

  projects = environment.project_content;

  count = 0;

  constructor(private renderer: Renderer2){
    console.log('hello from project constructor');
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    //console.log("scroll event: "+window.scrollY)
    // if(environment.sticky){
    //   this.renderer.setStyle(this.projectnav.nativeElement,'position','fixed')
    // } else {
    //   this.renderer.setStyle(this.projectnav.nativeElement,'position','relative')
    // }

    //console.log(environment.header_bottom);

    // this.count += 5;
    // this.renderer.setStyle(this.projectnav.nativeElement,'top',this.count+"px")
    // const count2 = getComputedStyle(this.projectnav.nativeElement).getPropertyValue('top');
    // console.log("count2: "+count2);

    // console.log(environment.header_bottom);
    // this.renderer.setStyle(this.projectnav.nativeElement,'top',environment.header_bottom+"px")

  }

  // @HostListener('mouseenter') mouseover(eventData: Event){
  //     console.log("mouse enter event");
  //   }

  scrollTo(el: HTMLElement){
    el.scrollIntoView();
  }
}

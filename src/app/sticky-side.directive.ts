import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStickySide]'
})
export class StickySideDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event){
      // console.log('mouse enter event');
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
			// this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

}

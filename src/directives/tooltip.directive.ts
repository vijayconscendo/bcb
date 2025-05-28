import { Directive, ElementRef, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    new bootstrap.Tooltip(this.el.nativeElement);
  }
}

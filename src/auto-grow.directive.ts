// auto-grow.directive.ts

import { Directive, ElementRef, HostListener } from '@angular/core';

/** Type of the Directive decorator.
 *
 * @stable*/
@Directive({
    selector : '[autogrow]',
    host: {
    '(keydown.enter)' : 'stopEnter($event)'
    }
})

/*
*   Directive for auto grow of textArea*/

export class AutoGrowDirective {

    /** Host Listeners
   * Specifies which DOM events a directive listens to via a set of `(event)` to `method`**/

    @HostListener('input', ['$event.target'])
    oninput(textArea: HTMLTextAreaElement): void {
        this.adjust();
    }
    constructor(public element: ElementRef) {
        element.nativeElement.style.resize = 'none'; // removes textarea icon
    }

    /* Lifecycle hook that is called after every check of a component's view. */

    ngAfterViewInit(): void {
        this.adjust();
    }

    /*  Method used to provide auto-grow scroll for textArea */

    adjust(): void {
        let nativeElement = this.element.nativeElement;
        let fieldHeight;
        // if(nativeElement.id == 'firstName') {
        //     fieldHeight = nativeElement.style.height;
        // }
        nativeElement.style.overflow = 'hidden';
        nativeElement.setAttribute('spellcheck', 'false');
        nativeElement.style.height = 'auto';
        // nativeElement.style.resize = 'none'; // removes textarea icon
        // if(nativeElement.scrollHeight < 57) {
        //     nativeElement.style.height = '57px';
        // } else {
        //     nativeElement.style.height = nativeElement.scrollHeight + 'px';
        // }
        nativeElement.style.height = nativeElement.scrollHeight + 'px';
    }

    stopEnter(event) {
         if(event.keyCode == 13) {
       event.preventDefault(); // Makes no difference
       }
    }
}

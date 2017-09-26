import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, HostListener, HostBinding } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({
  template: `<textarea autogrow></textarea>`
})
class FieldAutoGrowComponent {

//     @HostBinding("style.height") innerHeight: string;

//     @HostListener('textarea') oninput() {
//     this.innerHeight = 'auto';
//   }
}

describe('Directive : Auto Grow', () => {
  let component: FieldAutoGrowComponent;
  let fixture: ComponentFixture<FieldAutoGrowComponent>;
  let inputEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAutoGrowComponent, AutoGrowDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAutoGrowComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('textarea'));
  });

    it('focusing over textarea', () => {
        inputEl.triggerEventHandler('textarea', FieldAutoGrowComponent);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.resize).toBe('none');
    });
});

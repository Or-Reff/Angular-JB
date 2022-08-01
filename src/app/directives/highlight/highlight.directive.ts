import { Directive, HostBinding, HostListener, Input } from '@angular/core';

// Host Element
// זוהי תגיד בה אנו משתמשים עם ה Directive

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {

  @Input('highlight') // <p highlight="some-color">
  public defaultBackColor = '';

  @HostBinding('style.background-color')
  public backColor = '';

  ngOnInit(): void {
    if (!this.defaultBackColor) this.defaultBackColor = 'yellow';
  }

  @HostListener('mouseenter')
  public paint(): void {
    this.backColor = this.defaultBackColor;
  }

  @HostListener('mouseleave')
  public clear(): void {
    this.backColor = '';
  }
}

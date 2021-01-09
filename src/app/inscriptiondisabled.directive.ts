import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appInscriptiondisabled]'
})
export class InscriptiondisabledDirective {
  @HostBinding('class.link-is-disabled') status: boolean;
  @Input()
  set appInscriptiondisabled(value) {
  this.status = value;
  }
  constructor() { }

}

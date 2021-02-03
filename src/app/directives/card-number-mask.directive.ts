import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardNumberMask]'
})
export class CardNumberMaskDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement;
  let trimmed = input.value.replace(/\s+/g, '');
  if (trimmed.length > 14) {
    trimmed = trimmed.substr(0, 14);
  }
  trimmed = trimmed.replace(/-/g,'');
  let numbers = [];
  numbers.push(trimmed.substr(0,4));
  if(trimmed.substr(4,4)!=="")
    numbers.push(trimmed.substr(4,4));
  if(trimmed.substr(8,4)!="")
    numbers.push(trimmed.substr(8,4));
  input.value = numbers.join('-');
  }

}

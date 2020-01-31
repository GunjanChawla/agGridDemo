import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  showHideLoader(val: string) {
    const node = document.querySelector('.spinner') as HTMLElement;
    node.style.display = val;
  }
}

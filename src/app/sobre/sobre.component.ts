import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  public title1 = "Sobre"
  showAboutInfo: boolean = false;

  constructor(){
  }
  toggleAbout(): void {
    this.showAboutInfo = !this.showAboutInfo;
  }
}

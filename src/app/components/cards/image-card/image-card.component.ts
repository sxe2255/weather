import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent implements OnChanges {

  @Input() src:string;

  srcLink: string;

  constructor() { }

  ngOnChanges() {
    this.srcLink = `/assets/images/${this.src}.png`;
  }


  // srcLink: string = `/assets/images/${this.src}.png`
}

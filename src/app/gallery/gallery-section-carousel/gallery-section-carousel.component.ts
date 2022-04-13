import { Component, Input, OnInit } from '@angular/core';

export interface GallerySection {
  logoSrc: string;
  logoAlt?: string;
  title: string;
}

@Component({
  selector: 'app-gallery-section-carousel',
  templateUrl: './gallery-section-carousel.component.html',
  styleUrls: ['./gallery-section-carousel.component.scss']
})
export class GallerySectionCarouselComponent implements OnInit {

  @Input() items: GallerySection[] = [];

  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { debounceRaf } from './../../../utils/debounce-raf';
import { GallerySection } from './../gallery-section-carousel/gallery-section-carousel.component';

export interface GalleryItem {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  shortDescription: string;
}

export interface GalleryItemWithSectionId extends GalleryItem {
  sectionId: number;
}

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss']
})
export class GalleryCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() items: GalleryItemWithSectionId[] = [];
  @Input() sections?: GallerySection[];

  @ViewChild('galleryContainer') galleryContainer?: ElementRef;

  currentIndex: number = 0;
  showNum: number = 1;

  debouncedResizeUpdate?: EventListenerOrEventListenerObject;

  constructor() {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.updateShowNum();

    this.debouncedResizeUpdate = debounceRaf(this.updateShowNum, this);
    window.addEventListener('resize', this.debouncedResizeUpdate);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.debouncedResizeUpdate as EventListenerOrEventListenerObject);
  }

  updateShowNum(): void {
    const containerWidth = this.galleryContainer?.nativeElement.offsetWidth;

    if (!containerWidth) {
      return
    }

    const newShowNum = containerWidth / 330;
    if (newShowNum < 1) {
      this.showNum = 1;
      return;
    }

    this.showNum = newShowNum;
  }

}

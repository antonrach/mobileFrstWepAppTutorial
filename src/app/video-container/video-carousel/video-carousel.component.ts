import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy, TemplateRef, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { clamp } from 'src/utils/clamp';
import { debounceRaf } from 'src/utils/debounce-raf';
import { VideoSourceObject } from '../video-container/video-container.component';
import { AppComponent } from './../../app.component';

export interface VideoItemObject {
  sources: VideoSourceObject[];
  additionalTemplate?: TemplateRef<any>;
  additionalTemplateName?: keyof AppComponent;
}

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.scss']
})
export class VideoCarouselComponent implements OnInit, OnDestroy {
  @Input() videoItems: VideoItemObject[] = [];
  @Input() defaultVideoIndex: number | undefined;

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }

  @ViewChild('videoCarouselContainer') videoCarouselContainer: ElementRef | undefined;

  videoSwitchTimeout: number | null = null;

  currentVideoIndex: number = 0;

  isGoingPrev: boolean = false;
  isGoingNext: boolean = false;
  isSwitchDisabled: boolean = false;

  staticContainerHeight: number = 500;
  videoContainerHeight: number = 500;

  debouncedScrollUpdate: EventListenerOrEventListenerObject | undefined;
  debouncedInit: EventListenerOrEventListenerObject | undefined;

  ngOnInit(): void {
    if (this.defaultVideoIndex) {
      this.currentVideoIndex = this.defaultVideoIndex;
    }

    this.initializeVideoHeight();

    this.debouncedScrollUpdate = debounceRaf(this.updateVideoContainerHeight, this);
    this.debouncedInit = debounceRaf(this.initializeVideoHeight, this);

    window.addEventListener('resize', this.debouncedInit);

    window.addEventListener('scroll', this.debouncedScrollUpdate);
  }

  ngOnDestroy(): void {
      window.removeEventListener('resize', this.debouncedInit as EventListenerOrEventListenerObject);
      window.removeEventListener('scroll', this.debouncedScrollUpdate as EventListenerOrEventListenerObject);
  }

  initializeVideoHeight(): void {
    this.staticContainerHeight = window.innerHeight * 0.85;
    this.updateVideoContainerHeight();
  }

  updateVideoContainerHeight(): void {
    const newHeight = clamp(
      window.innerHeight * 0.85 - window.pageYOffset,
      window.innerHeight * 0.5,
      window.innerHeight * 0.85,
    );

    this.videoContainerHeight = newHeight;
  }

  switchVideo(next: boolean = true): void {
    if (this.isSwitchDisabled) {
      return;
    }

    this.isSwitchDisabled = true;
    setTimeout(() => {
      this.isSwitchDisabled = false;
    }, 500);
    this.resetVideoSwitchTimeout();

    if (next) {
      this.isGoingNext = true;
      this.isGoingPrev = false;
      this.videoSwitchTimeout = window.setTimeout(() => {
        this.isGoingNext = false;
      }, 1000)
      if (this.currentVideoIndex === this.videoItems.length - 1) {
        this.currentVideoIndex = 0;
        return;
      }

      this.currentVideoIndex++;
      return;
    }

    this.isGoingPrev = true;
    this.isGoingNext = false;
    this.videoSwitchTimeout = window.setTimeout(() => {
      this.isGoingPrev = false;
    }, 1000);
    if (!this.currentVideoIndex) {
      this.currentVideoIndex = this.videoItems.length - 1;
      console.log(this.isGoingPrev);

      return;
    }

    this.currentVideoIndex--;
  }

  resetVideoSwitchTimeout(): void {
    if (this.videoSwitchTimeout) {
      clearTimeout(this.videoSwitchTimeout);
      this.videoSwitchTimeout = null;
    }
  }

  translateElement(index: number): string | null {
    return this.isGoingPrev ? this.translateToEnd(index) : this.isGoingNext ? this.translateToStart(index) : null;
  }

  translateToStart(index: number): string | null {
    if (index === this.videoItems.length - 1 && this.currentVideoIndex === 0) {
      return `translateX(-${100*(this.videoItems.length - 1)}%)`;
    }

    return null;
  }

  translateToEnd(index: number): string | null {
    if (index === 0 && this.currentVideoIndex === this.videoItems.length - 1) {
      return `translateX(${100*(this.videoItems.length - 1)}%)`;
    }

    return null;
  }
}

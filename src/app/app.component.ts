import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { fromHeight0TopToBottomAnimation, logoAnimation, riseFromAboveAnimation1, riseFromAboveAnimation2 } from './shared/animations';
import { VideoItemObject } from './video-container/video-carousel/video-carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    logoAnimation,
    fromHeight0TopToBottomAnimation,
    riseFromAboveAnimation1,
    riseFromAboveAnimation2,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('firstSlideInfo', { read: TemplateRef }) firstSlideInfo?: TemplateRef<any>;

  constructor(
    private cdr: ChangeDetectorRef,
  ) {  }

  videoItems: VideoItemObject[] = [
    {
      sources: [
        {
          src: '/assets/Rammstein_Radio_Premiere_Berlin.mp4'
        },
      ],
      additionalTemplateName: 'firstSlideInfo',
    },
    {
      sources: [
        {
          src: '/assets/Lindemann_guard.mp4'
        },
      ],
    },
    {
      sources: [
        {
          src: '/assets/Till_birthday_Dubai.mp4'
        },
      ],
    },
  ];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.videoItems = (this.videoItems.map((item) => {
      if (item.additionalTemplateName && this[item.additionalTemplateName]) {
        return { ...item, additionalTemplate: this[item.additionalTemplateName] }
      }
      return item;
    })) as VideoItemObject[];
    this.cdr.detectChanges();
  }

  joinTeams(e: MouseEvent): void {
    console.log(e);
    e.stopPropagation();
  }
}

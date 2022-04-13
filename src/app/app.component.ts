import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { logoAnimation, swipeAnimation1, fromHeight0TopToBottomAnimation, riseFromAboveAnimation1, riseFromAboveAnimation2, swipeAnimation2 } from './shared/animations';
import { VideoItemObject } from './video-container/video-carousel/video-carousel.component';
import { GalleryItem, GalleryItemWithSectionId } from './gallery/gallery-carousel/gallery-carousel.component';
import { GallerySection } from './gallery/gallery-section-carousel/gallery-section-carousel.component';

interface GallerySectionWithItems extends GallerySection {
  items: GalleryItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    logoAnimation,
    fromHeight0TopToBottomAnimation,
    riseFromAboveAnimation1,
    riseFromAboveAnimation2,
    swipeAnimation1,
    swipeAnimation2,
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

  gallerySectionsWithItems: GallerySectionWithItems[] = [
    {
      title: 'Spotify',
      logoSrc: '/assets/images/toppng.com-spotify-icon-green-logo-spotify-logo-png-hd-815x820.png',
      items: [
        {
          imgSrc: '/assets/images/20220328-101015_rammsteinzeitstdcda3dpsrplus.jpg',
          title: 'Rammstein - Zeit (2022)',
          shortDescription: 'Listen to the new album now!',
        },
        {
          imgSrc: '/assets/images/master_cover.jpg',
          title: 'Metallica Master of Puppets (1986)',
          shortDescription: 'Go old school and classic!',
        },
      ],
    },
    {
      title: 'Teams',
      logoSrc: '/assets/images/Microsoft-Teams-Logo-700x394.png',
      items: [
        {
          imgSrc: '/assets/images/16b6a5b2-3158-4189-979a-34b087adf12e.png',
          title: 'Dev Team: Daily stand up',
          shortDescription: '9:30 - 10:00 AM',
        },
        {
          imgSrc: '/assets/images/pagerduty-microsoft-teams-2020-1024x719.png',
          title: 'Sprint plans',
          shortDescription: 'Every 2 weeks',
        },
      ],
    },
  ];

  galleryItems: GalleryItemWithSectionId[] = [];
  gallerySections: GallerySection[] = [];

  ngOnInit(): void {
    this.gallerySections = this.gallerySectionsWithItems.map((section) => ({
      title: section.title,
      logoSrc: section.logoSrc,
    }));
    this.galleryItems = this.gallerySectionsWithItems.map((section, index) => section.items.map((item) => ({...item, sectionId: index}))).flat();
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

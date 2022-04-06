import { Component, OnInit, Input } from '@angular/core';

export interface VideoSourceObject {
  src: string;
  type?: string;
}

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent implements OnInit {
  @Input() sources: VideoSourceObject[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.sources);

  }

  getVideoType(src: string): string {
    return `video/${src.slice(src.lastIndexOf('.') + 1)}`;
  }

}

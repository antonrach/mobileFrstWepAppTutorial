import { Component } from '@angular/core';
import { VideoSourceObject } from './video-container/video-container/video-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animated-mobile-first';

  videoSources: VideoSourceObject[] = [
    {
      src: '/assets/Rammstein_Radio_Premiere_Berlin.mp4'
    }
  ];
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoContainerComponent } from './video-container/video-container.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
    'pinch': { enable: false },
    'rotate': { enable: false },
  };
}

@NgModule({
  declarations: [
    VideoContainerComponent,
    VideoCarouselComponent,
  ],
  imports: [
    CommonModule,
    HammerModule,
    NgxHmCarouselModule,
    FormsModule,
  ],
  exports: [
    VideoContainerComponent,
    VideoCarouselComponent,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class VideoContainerModule { }

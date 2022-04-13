import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { GallerySectionCarouselComponent } from './gallery-section-carousel/gallery-section-carousel.component';


@NgModule({
  declarations: [
    GalleryItemComponent,
    GalleryCarouselComponent,
    GallerySectionCarouselComponent,
  ],
  imports: [
    CommonModule,
    NgxHmCarouselModule,
    FormsModule,
  ],
  exports: [
    GalleryItemComponent,
    GalleryCarouselComponent,
    GallerySectionCarouselComponent,
  ],
})
export class GalleryModule { }

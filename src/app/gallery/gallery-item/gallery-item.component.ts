import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() imgSrc: string = '';
  @Input() imgAlt?: string = 'No cover';
  @Input() title: string = '';
  @Input() shortDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

}

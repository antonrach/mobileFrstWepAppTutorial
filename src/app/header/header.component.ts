import { Component, OnInit, Input } from '@angular/core';
import { fallDownAnimation, fallDownDelayedAnimation } from './../shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fallDownAnimation,
    fallDownDelayedAnimation,
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() device: string = '';

  ngOnInit(): void {
  }

}

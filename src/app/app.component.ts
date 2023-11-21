import { AfterViewInit, Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { initFlowbite } from 'flowbite';
import { LenisService } from './lenis/lenis.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    initFlowbite();
    this.lenis.getInstLenis;
  }
  title = 'movieApp17-2';

  constructor(private lenis: LenisService) {}
}

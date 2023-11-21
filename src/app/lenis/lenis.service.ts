import { Injectable, OnInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class LenisService {
  private lenis!: Lenis;

  get getInstLenis(): Lenis {
    return this.lenis as Lenis;
  }

  constructor() {
    if (!this.lenis) {
      this.lenis = new Lenis();

      this.lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }
  }
}

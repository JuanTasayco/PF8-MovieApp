import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { NgFor } from '@angular/common';
import { Part2Component } from '../pages/principal/part2/part2.component';

@Component({
  selector: 'app-home-movie',
  standalone: true,
  imports: [NgFor, Part2Component],
  templateUrl: './home-movie.component.html',
  styleUrl: './home-movie.component.scss',
})
export class HomeMovieComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  @ViewChildren('child') childs!: QueryList<ElementRef>;
  /*   @ViewChildren('title') titles!: QueryList<ElementRef>; */

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    /*  this.animationTitle(); */
    this.scrollHorizontal();
  }

  /* animationTitle() {
    const tl = gsap.timeline({
      repeat: -1,
    });
    this.titles.forEach(({ nativeElement: element }) => {
      tl.to(element, {
        duration: 2,
        ease: 'power2.inOut',
        onStart: () => {
          element.classList.remove('hidden');
        },
        onComplete: () => {
          element.classList.add('hidden');
        },
      });
    });
  } */

  scrollHorizontal() {
    const longContainer = this.container.nativeElement.offsetWidth;
    const sections = gsap.utils.toArray('.Home-child');
    console.log(sections);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      scrollTrigger: {
        trigger: this.container.nativeElement,
        scrub: true,
        markers: true,
        start: 'top top',
        pin: true,
        end: `+=${longContainer}`,
      },
    });

    /*  this.childs.forEach(({ nativeElement: el }, index, arr) => {
      gsap.to(el, {
        xPercent: -100 * (arr.length-1),
        scrollTrigger: {
          trigger: this.container.nativeElement,
          scrub: true,
          markers: true,
          start: 'top top',
          pin: true,
          end: `+=${longContainer}`,
        },
      });
    }); */
  }
}

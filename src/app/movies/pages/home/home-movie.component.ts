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
import { Part2Component } from '../principal/part2/part2.component';
import { Part1Component } from '../principal/part1/part1.component';

@Component({
  selector: 'app-home-movie',
  standalone: true,
  imports: [NgFor, Part1Component, Part2Component],
  templateUrl: './home-movie.component.html',
  styleUrl: './home-movie.component.scss',
})
export class HomeMovieComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  @ViewChildren('child') childs!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.scrollHorizontal();
  }

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
  }
}

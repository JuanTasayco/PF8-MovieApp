import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CanvasComponent } from '../../../../shared/canvas/canvas.component';
import { gsap } from 'gsap';
import { OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { RatingComponent } from '../../../../shared/rating/rating.component';

@Component({
  selector: 'app-part1',
  standalone: true,
  imports: [CanvasComponent, RatingComponent],
  templateUrl: './part1.component.html',
  styleUrl: './part1.component.scss',
})
export class Part1Component implements AfterViewInit, OnInit {
  serviceMovie = inject(MoviesService);
  @ViewChildren('title') titles!: QueryList<ElementRef>;
  ngOnInit(): void {
    this.serviceMovie.getTopMovies().subscribe(console.log);
  }

  ngAfterViewInit(): void {}

  animationTitle() {
    const tl = gsap.timeline({
      delay: 3,
      repeat: -1,
    });
    this.titles.forEach(({ nativeElement: element }) => {
      tl.to(element, {
        opacity: 0,
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
  }
}

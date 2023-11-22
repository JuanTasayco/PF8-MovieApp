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
import { MockupDesktopComponent } from '../../../../shared/mockup-desktop/mockup-desktop.component';

@Component({
  selector: 'app-part1',
  standalone: true,
  imports: [CanvasComponent, RatingComponent, MockupDesktopComponent],
  templateUrl: './part1.component.html',
  styleUrl: './part1.component.scss',
})
export class Part1Component implements AfterViewInit, OnInit {
  serviceMovie = inject(MoviesService);

  ngOnInit(): void {
    this.serviceMovie.getTopMovies().subscribe(console.log);
  }

  ngAfterViewInit(): void {}
}

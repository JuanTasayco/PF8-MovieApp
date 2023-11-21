import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CanvasComponent } from '../../../../shared/canvas/canvas.component';
import { gsap } from 'gsap';
@Component({
  selector: 'app-part1',
  standalone: true,
  imports: [CanvasComponent],
  templateUrl: './part1.component.html',
  styleUrl: './part1.component.scss',
})
export class Part1Component implements AfterViewInit {
  @ViewChildren('title') titles!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.animationTitle();
  }

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

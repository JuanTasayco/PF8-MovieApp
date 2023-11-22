import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-mockup-desktop',
  standalone: true,
  imports: [],
  templateUrl: './mockup-desktop.component.html',
  styleUrl: './mockup-desktop.component.scss',
})
export class MockupDesktopComponent implements AfterViewInit {
  @ViewChildren('mockup') mockups!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.animationTitle();
  }

  animationTitle() {
    const tl = gsap.timeline({
      repeat: -1,
    });
    this.mockups.forEach(({ nativeElement: element }) => {
      tl.to(element, {
        opacity: 0,
        duration: 3,
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

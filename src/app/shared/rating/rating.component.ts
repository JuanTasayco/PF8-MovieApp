import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent implements OnInit {
  @Input({
    required: true,
  })
  numberRating!: number;

  stars = signal<string[]>(['o', 'o', 'o', 'o', 'o']);

  ngOnInit(): void {
    this.setRating();
  }

  setRating() {
    if (this.numberRating <= 5) {
      this.stars.update(() =>
        this.stars().map((item, index) =>
          index < this.numberRating ? 'x' : 'o'
        )
      );
    }
  }
}

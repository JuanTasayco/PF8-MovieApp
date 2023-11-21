import { Component, ViewEncapsulation } from '@angular/core';

import { CarrouselComponent } from '../../../../shared/carrousel/carrousel.component';
import { CardComponent } from '../../../../shared/card/card.component';

@Component({
  selector: 'app-part2',
  standalone: true,
  imports: [CarrouselComponent, CardComponent],
  templateUrl: './part2.component.html',
  styleUrl: './part2.component.scss',
})
export class Part2Component {}

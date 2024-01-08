import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero, UniverseEnum } from '../hero/hero.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  universe = UniverseEnum;
  @Input() heroes!: Hero[];
  @Output() selectedHero = new EventEmitter<Hero>();

  selectHero(value: Hero): void {
    this.selectedHero.emit(value);
  }
}

import { ListComponent } from '../list/list.component';
import { Component } from '@angular/core';

export enum UniverseEnum {
  Marvel = 1,
  DC = 2,
}

export interface Hero {
  id: number;
  name: string;
  universe: UniverseEnum;
  img: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  universe = UniverseEnum;
  heroSelected: Hero | null = null;
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Superman',
      universe: UniverseEnum.DC,
      img: 'https://orig00.deviantart.net/535b/f/2016/364/0/7/superman_logo_by_brightestdayfan2814-datggl7.png',
    },
    {
      id: 2,
      name: 'Iron-Man',
      universe: UniverseEnum.Marvel,
      img: 'https://www.pinclipart.com/picdir/big/567-5675141_iron-man-symbol-iron-man-logo-png-clipart.png',
    },
    {
      id: 3,
      name: 'Capitán América',
      universe: UniverseEnum.Marvel,
      img: 'https://th.bing.com/th/id/R.165622e3fa31d16686ec42d648174dd1?rik=X9Y94kGqWJViMQ&pid=ImgRaw&r=0',
    },
    {
      id: 4,
      name: 'Spiderman',
      universe: UniverseEnum.Marvel,
      img: 'https://logolook.net/wp-content/uploads/2021/07/Symbol-Spiderman-2048x1152.png',
    },
    {
      id: 5,
      name: 'Batman',
      universe: UniverseEnum.DC,
      img: 'https://logosmarcas.net/wp-content/uploads/2020/12/Batman-Logo.png',
    },
    {
      id: 6,
      name: 'Shazam',
      universe: UniverseEnum.DC,
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cfe6c86e-f3e4-46ca-9341-28562641af0b/dcjtowv-8595b192-8885-406f-ab5a-f77d4cdb98b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmZTZjODZlLWYzZTQtNDZjYS05MzQxLTI4NTYyNjQxYWYwYlwvZGNqdG93di04NTk1YjE5Mi04ODg1LTQwNmYtYWI1YS1mNzdkNGNkYjk4YjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YzJu5HV_CYTjYi9BhLm8KiaxCjDlwmVLGKH585YzG2s',
    },
  ];

  selectHero(hero: Hero): void {
    this.heroSelected = hero;
  }
}

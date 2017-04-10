import { Component,OnInit } from '@angular/core';
import {MirceaComponent} from './mircea/mircea.component'
import {hero} from './hero'
import {HeroService} from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<h1>{{title}}</h1>
            <mirceaCo [hero] = "selectedHero"></mirceaCo>
            <h2>My Heroes</h2>
            <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
              <span class="badge">{{hero.id}}</span>{{hero.name}}
            </li>
            </ul>
            `,
 providers:[HeroService]
})

export class AppComponent implements OnInit {


  title = 'Tour of heroes';

  heroes: hero[];
  selectedHero : hero ;

  constructor(private heroService:HeroService){}

  onSelect(hero: hero) : void
  {
    this.selectedHero = hero;
  }
  
  ngOnInit():void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}





import {Injectable} from '@angular/core'
import {hero} from './hero'
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService{
    getHeroes(): Promise<hero[]> 
    {
        return  Promise.resolve(HEROES);
    } //stud - first comment
}
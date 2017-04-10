import { Component, Input } from '@angular/core';
import {hero} from '../hero';
@Component({
  selector: 'mirceaCo',
  templateUrl: './mircea.component.html',
  styleUrls: ['./mircea.component.css']
})



export class MirceaComponent {
  
  @Input() hero:hero;
  constructor() { }


}

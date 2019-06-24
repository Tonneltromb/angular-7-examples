import {Component} from '@angular/core';

interface Pair {
  title: string;
  size: number;
}

@Component({
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  objects: Pair[] = [
    {title: 'pair 1', size: 23},
    {title: 'pair 2', size: 77},
  ];
}

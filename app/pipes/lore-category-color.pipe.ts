import { Pipe, PipeTransform } from '@angular/core';

/**
 * Display the category color of a lore element.
 * Usage : {{ loreSheet.category | loreCategoryColor }}
 */
@Pipe({name: 'loreCategoryColor'})
export class LoreCategoryColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'character':
        color = 'purple lighten-2';
        break;
      case 'place':
        color = 'orange lighten-2';
        break;
      case 'item':
        color = 'red lighten-2';
        break;
      case 'event':
        color = 'green lighten-2';
        break;
      case 'class':
        color = 'blue lighten-2';
        break;
      case 'race':
        color = 'cyan accent-1';
        break;
      case 'other':
        color = 'grey accent-1';
        break;
      default:
        color = 'grey accent-1';
        break;
    }

    return '' + color;

  }
}
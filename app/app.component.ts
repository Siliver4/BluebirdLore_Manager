import { Component, OnInit } from '@angular/core';
import { LoreSheet } from './loreSheet';
import { LORESHEETS } from './mock-loreSheets';

@Component({
	selector: 'bluebirdlore_manager-app',
	templateUrl: 'app/templates/loreList.html',
})
export class AppComponent implements OnInit {

    loreSheets: LoreSheet[] = null;

    ngOnInit() {
        this.loreSheets = LORESHEETS;
    }

    selectLoreSheet(loreSheets: LoreSheet) {
        console.log('Vous avez selectionné ' + loreSheets.title);
    }
}
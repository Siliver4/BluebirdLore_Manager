import { Component, OnInit } from '@angular/core';
import { LoreSheet } from '../dataSchema/loreSheet';
import { LORESHEETS } from '../dataSchema/mock-loreSheets';

@Component({
	selector: 'bluebirdlore_manager-app',
	templateUrl: 'dist/loreList/loreList.html',
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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Display the category color of a lore element.
 * Usage : {{ loreSheet.category | loreCategoryColor }}
 */
var LoreCategoryColorPipe = (function () {
    function LoreCategoryColorPipe() {
    }
    LoreCategoryColorPipe.prototype.transform = function (type) {
        var color;
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
    };
    return LoreCategoryColorPipe;
}());
LoreCategoryColorPipe = __decorate([
    core_1.Pipe({ name: 'loreCategoryColor' })
], LoreCategoryColorPipe);
exports.LoreCategoryColorPipe = LoreCategoryColorPipe;
//# sourceMappingURL=lore-category-color.pipe.js.map
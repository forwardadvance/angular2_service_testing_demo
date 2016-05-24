"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Cats = (function () {
    function Cats() {
    }
    Cats.prototype.get = function () {
        return [
            {
                name: "Cheetara",
                specialSkill: "speed",
                planet: "Thundera",
                image: "images/cheetara.jpg"
            },
            {
                name: "Lion-O",
                specialSkill: "Sword of Omens",
                planet: "Thundera",
                image: "images/lion-o.jpg"
            },
            {
                name: "Panthro",
                specialSkill: "Mechanical Engineering",
                planet: "Thundera",
                image: "images/panthro.jpg"
            },
            {
                name: "Jaga the Wise",
                specialSkill: "Wisdom",
                planet: "Thundera",
                image: "images/jaga.jpg"
            },
            {
                name: "Snarf",
                specialSkill: "Annoyance",
                planet: "Thundera",
                image: "images/snarf.jpg"
            },
            {
                name: "Robear Berbil",
                specialSkill: "Farming",
                planet: "Ro-Bear",
                image: "images/berbils.jpg"
            }
        ];
    };
    Cats = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Cats);
    return Cats;
}());
exports.Cats = Cats;
//# sourceMappingURL=cats.service.js.map
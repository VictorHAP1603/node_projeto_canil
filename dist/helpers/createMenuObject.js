"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let menus = {
        all: false,
        cat: false,
        fish: false,
        dog: false,
    };
    if (activeMenu !== "") {
        menus[activeMenu] = true;
    }
    return menus;
};
exports.createMenuObject = createMenuObject;

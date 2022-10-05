"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Navbar_1 = __importDefault(require("./Navbar"));
class Page {
    constructor() {
        this._navbar = new Navbar_1.default();
    }
    get navbar() {
        return this._navbar;
    }
    executeScriptOn(script, element) {
        return protractor_1.browser.executeScript(script, element);
    }
    wait(miliseconds) {
        return protractor_1.browser.sleep(miliseconds);
    }
    clearElement(element) {
        return element.clear();
    }
    scrollTo(element) {
        return this.executeScriptOn("arguments[0].scrollIntoView(true)", element);
    }
}
exports.default = Page;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQWlFO0FBQ2pFLHNEQUE4QjtBQUU5QixNQUFNLElBQUk7SUFFTjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sZUFBZSxDQUFDLE1BQWMsRUFBRSxPQUFzQjtRQUN6RCxPQUFPLG9CQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sSUFBSSxDQUFDLFdBQW1CO1FBQzNCLE9BQU8sb0JBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLFlBQVksQ0FBQyxPQUFzQjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sUUFBUSxDQUFDLE9BQXNCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RSxDQUFDO0NBRUo7QUFFRCxrQkFBZSxJQUFJLENBQUMifQ==
"use strict";
cc._RF.push(module, '26a75clsMdABqjiGgfGLK4S', 'Background');
// Scripts/Background.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BackgroundLooper = /** @class */ (function (_super) {
    __extends(BackgroundLooper, _super);
    function BackgroundLooper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.background1 = null;
        _this.background2 = null;
        _this.background3 = null;
        _this.moveSpeed = 50;
        return _this;
    }
    BackgroundLooper.prototype.start = function () {
        this.background2.x = this.background1.x + this.background1.width;
        this.background2.y = this.background1.y;
        this.background3.x = this.background2.x + this.background2.width;
        this.background3.y = this.background1.y;
    };
    BackgroundLooper.prototype.update = function (dt) {
        var relativeSpeed1 = this.moveSpeed * (this.background1.width / this.background2.width);
        var relativeSpeed2 = this.moveSpeed * (this.background2.width / this.background3.width);
        this.background1.x -= relativeSpeed1 * dt;
        this.background2.x -= this.moveSpeed * dt;
        this.background3.x -= relativeSpeed2 * dt;
        if (this.background1.x <= -this.background1.width) {
            this.background1.x = this.background3.x + this.background3.width;
        }
        if (this.background2.x <= -this.background2.width) {
            this.background2.x = this.background1.x + this.background1.width;
        }
        if (this.background3.x <= -this.background3.width) {
            this.background3.x = this.background2.x + this.background2.width;
        }
    };
    __decorate([
        property(cc.Node)
    ], BackgroundLooper.prototype, "background1", void 0);
    __decorate([
        property(cc.Node)
    ], BackgroundLooper.prototype, "background2", void 0);
    __decorate([
        property(cc.Node)
    ], BackgroundLooper.prototype, "background3", void 0);
    __decorate([
        property
    ], BackgroundLooper.prototype, "moveSpeed", void 0);
    BackgroundLooper = __decorate([
        ccclass
    ], BackgroundLooper);
    return BackgroundLooper;
}(cc.Component));
exports.default = BackgroundLooper;

cc._RF.pop();
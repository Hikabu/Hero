"use strict";
cc._RF.push(module, 'a4facQBGdxDWrBAQzB27OAK', 'Stick');
// Scripts/Stick.ts

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
exports.Stick = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Stick = /** @class */ (function (_super) {
    __extends(Stick, _super);
    function Stick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockSpriteFrame = null;
        _this.stickNode = null;
        return _this;
    }
    Stick.prototype.onLoad = function () {
        cc.log('Stick onLoaded');
        this.stickNode = new cc.Node();
        this.stickNode.addComponent(cc.Sprite);
        this.stickNode.getComponent(cc.Sprite).spriteFrame = this.blockSpriteFrame;
        this.stickNode.anchorY = 0; // Anchor at the bottom
        this.node.addChild(this.stickNode);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    Stick.prototype.onTouchStart = function (event) {
        cc.log('Stick onTouchStart');
        this.schedule(this.growStick, 0.1);
    };
    Stick.prototype.onTouchEnd = function (event) {
        cc.log('Stick onTouchEnd');
        this.unschedule(this.growStick);
    };
    Stick.prototype.onTouchMove = function (event) {
        // Optionally handle touch move if needed
    };
    Stick.prototype.growStick = function () {
        var stickHeight = this.stickNode.height + 100; // Increase stick height by 10 pixels
        this.stickNode.height = stickHeight;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Stick.prototype, "blockSpriteFrame", void 0);
    Stick = __decorate([
        ccclass('Stick')
    ], Stick);
    return Stick;
}(cc.Component));
exports.Stick = Stick;

cc._RF.pop();
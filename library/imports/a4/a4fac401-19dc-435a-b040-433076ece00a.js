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
exports.StickGame = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StickGame = /** @class */ (function (_super) {
    __extends(StickGame, _super);
    function StickGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockSpriteFrame = null;
        _this.player = null;
        _this.stickNode = null;
        return _this;
    }
    StickGame.prototype.onLoad = function () {
        cc.log('StickGame onLoaded');
        this.stickNode = new cc.Node();
        var stickSprite = this.stickNode.addComponent(cc.Sprite);
        stickSprite.spriteFrame = this.blockSpriteFrame;
        this.stickNode.anchorY = 0; // Anchor at the bottom
        this.stickNode.width = 10; // Set a fixed width to avoid distortion
        this.node.addChild(this.stickNode);
        // Attach touch event listeners to the canvas
        var canvas = cc.find('Canvas');
        if (canvas) {
            canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }
    };
    StickGame.prototype.onTouchStart = function (event) {
        cc.log('StickGame onTouchStart');
        this.schedule(this.growStick, 0.1);
    };
    StickGame.prototype.onTouchEnd = function (event) {
        cc.log('StickGame onTouchEnd');
        this.unschedule(this.growStick);
        this.fallStick();
    };
    StickGame.prototype.growStick = function () {
        var stickHeight = this.stickNode.height + 100; // Increase stick height by 10 pixels
        this.stickNode.height = stickHeight;
    };
    StickGame.prototype.fallStick = function () {
        var _this = this;
        cc.log('Stick falling');
        var rotateAction = cc.rotateTo(0.5, 90).easing(cc.easeCubicActionOut()); // Rotate 90 degrees in 0.5 seconds
        var moveAction = cc.sequence(rotateAction, cc.callFunc(function () {
            if (_this.player) {
                var playerComponent = _this.player.getComponent('Player');
                if (playerComponent) {
                    playerComponent.move(_this.stickNode.height);
                }
            }
        }));
        this.stickNode.runAction(moveAction);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], StickGame.prototype, "blockSpriteFrame", void 0);
    __decorate([
        property(cc.Node)
    ], StickGame.prototype, "player", void 0);
    StickGame = __decorate([
        ccclass
    ], StickGame);
    return StickGame;
}(cc.Component));
exports.StickGame = StickGame;
// const { ccclass, property } = cc._decorator;
// @ccclass('Stick')
// export class Stick extends cc.Component {
//     @property(cc.SpriteFrame)
//     blockSpriteFrame: cc.SpriteFrame = null;
//     private stickNode: cc.Node = null;
//     onLoad() {
//         cc.log('Stick onLoaded');
//         this.stickNode = new cc.Node();
//         this.stickNode.addComponent(cc.Sprite);
//         this.stickNode.getComponent(cc.Sprite).spriteFrame = this.blockSpriteFrame;
//         this.stickNode.anchorY = 0; // Anchor at the bottom
//         this.node.addChild(this.stickNode);
//         // T listeners
//         const canvas = cc.find('Canvas');
//         if (canvas) {
//             canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
//             canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
//         }
//     }
//     onTouchStart(event: cc.Touch) {
//         cc.log('Stick onTouchStart');
//         this.schedule(this.growStick, 0.1);
//     }
//     onTouchEnd(event: cc.Touch) {
//         cc.log('Stick onTouchEnd');
//         this.unschedule(this.growStick);
//         this.fallStick();
//     }
//     growStick() {
//         const stickHeight = this.stickNode.height + 100; // Increase
//         this.stickNode.height = stickHeight;
//     }
//     fallStick() {
//         cc.log('Stick falling');
//         const rotateAction = cc.rotateTo(0.5, 90).easing(cc.easeCubicActionOut()); // Rotate
//         this.stickNode.runAction(rotateAction);
//     }
// }
// const { ccclass, property } = cc._decorator;
// @ccclass('Stick')
// export class Stick extends cc.Component {
//     @property(cc.SpriteFrame)
//     blockSpriteFrame: cc.SpriteFrame = null;
//     private stickNode: cc.Node = null;
//     onLoad() {
//         cc.log('Stick onLoaded');
//         this.stickNode = new cc.Node();
//         this.stickNode.addComponent(cc.Sprite);
//         this.stickNode.getComponent(cc.Sprite).spriteFrame = this.blockSpriteFrame;
//         this.stickNode.anchorY = 0; // Anchor at the bottom
//         this.node.addChild(this.stickNode);
//         // Attach touch event listeners to the canvas
//         const canvas = cc.find('Canvas');
//         if (canvas) {
//             canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
//             canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
//         }
//     }
//     onTouchStart(event: cc.Touch) {
//         cc.log('Stick onTouchStart');
//         this.schedule(this.growStick, 0.1);
//     }
//     onTouchEnd(event: cc.Touch) {
//         cc.log('Stick onTouchEnd');
//         this.unschedule(this.growStick);
//     }
//     growStick() {
//         const stickHeight = this.stickNode.height + 100; // Increase stick height by 10 pixels
//         this.stickNode.height = stickHeight;
//     }
// }

cc._RF.pop();
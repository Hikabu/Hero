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
        _this.stickSFX = null;
        _this.stickSpriteFrame = null;
        _this.player = null;
        _this.stickNode = null;
        _this.totalStickHeight = 0;
        _this.originalStickHeight = 0;
        return _this;
    }
    StickGame.prototype.onLoad = function () {
        this.stickNode = new cc.Node();
        var stickSprite = this.stickNode.addComponent(cc.Sprite);
        stickSprite.spriteFrame = this.stickSpriteFrame;
        this.stickNode.anchorY = 0;
        this.stickNode.width = 10;
        this.stickNode.height = 0;
        this.originalStickHeight = this.stickNode.height;
        this.node.addChild(this.stickNode);
        this.totalStickHeight = this.stickNode.height;
        var canvas = cc.find('Canvas');
        if (canvas) {
            canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }
    };
    StickGame.prototype.onTouchStart = function (event) {
        this.schedule(this.growStick, 0.000000001); // Grow
    };
    StickGame.prototype.onTouchEnd = function (event) {
        this.unschedule(this.growStick);
        this.fallStick();
    };
    StickGame.prototype.growStick = function () {
        this.totalStickHeight += 30;
        this.stickNode.height = this.totalStickHeight;
    };
    StickGame.prototype.resetStick = function () {
        this.stickNode.destroy();
        this.stickNode = new cc.Node();
        this.onLoad();
    };
    StickGame.prototype.fallStick = function () {
        var _this = this;
        var rotateAction = cc.rotateTo(0.5, 90).easing(cc.easeCubicActionOut()); // Rotate
        this.stickSFX.play();
        var moveAction = cc.sequence(rotateAction, cc.callFunc(function () {
            if (_this.player) {
                var playerComponent = _this.player.getComponent('Player');
                if (playerComponent) {
                    playerComponent.walkOnStick(_this.stickNode, _this.totalStickHeight);
                }
            }
        }), cc.delayTime(1.2), cc.callFunc(function () {
            _this.resetStick();
        }));
        this.stickNode.runAction(moveAction);
    };
    __decorate([
        property(cc.AudioSource)
    ], StickGame.prototype, "stickSFX", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StickGame.prototype, "stickSpriteFrame", void 0);
    __decorate([
        property(cc.Node)
    ], StickGame.prototype, "player", void 0);
    StickGame = __decorate([
        ccclass
    ], StickGame);
    return StickGame;
}(cc.Component));
exports.StickGame = StickGame;

cc._RF.pop();
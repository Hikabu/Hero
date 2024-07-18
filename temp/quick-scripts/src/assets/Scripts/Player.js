"use strict";
cc._RF.push(module, 'e0658Yzf3NCMrqwTnLGARRx', 'Player');
// Scripts/Player.ts

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
exports.Player = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.endPopupNode = null;
        _this.loser = null;
        _this.idleTimer = 0;
        _this.isOnPlatform = false;
        return _this;
    }
    Player.prototype.walkOnStick = function (stickNode, totalStickHeight) {
        var _this = this;
        var stickWorldPos = stickNode.parent.convertToWorldSpaceAR(stickNode.position);
        var targetX = stickWorldPos.x + totalStickHeight;
        var targetY = 288;
        var newX = targetX - totalStickHeight / 1.06;
        var targetPosition = this.node.parent.convertToNodeSpaceAR(cc.v2(newX, targetY));
        var moveAction = cc.sequence(cc.moveTo(1, targetPosition).easing(cc.easeCubicActionOut()), cc.callFunc(function () {
            _this.idleTimer = 0.2;
        }), cc.delayTime(1), cc.callFunc(function () {
            if (!_this.isOnPlatform) {
                _this.node.setPosition(cc.v2(128, 0));
                _this.endPopupNode.active = true;
            }
            else
                _this.node.runAction(cc.moveTo(1, cc.v2(128, 288)).easing(cc.easeCubicActionOut()));
        }));
        this.node.runAction(moveAction);
    };
    Player.prototype.End_Popup = function () {
        if (this.endPopupNode.active = true) {
            cc.game.end();
            this.loser.play();
        }
    };
    Player.prototype.onCollisionEnter = function (other, self) {
        if (other.node.name === 'Platform') {
            this.isOnPlatform = true;
        }
    };
    Player.prototype.onCollisionExit = function (other, self) {
        if (other.node.name === 'Platform') {
            this.isOnPlatform = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "endPopupNode", void 0);
    __decorate([
        property(cc.AudioSource)
    ], Player.prototype, "loser", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;
/*to backup*/
// const { ccclass, property } = cc._decorator;
// @ccclass
// export class Player extends cc.Component {
//     private idleTimer: number = 0;
//     private isOnPlatform: boolean = false;
//     walkOnStick(stickNode: cc.Node, totalStickHeight: number) {
//         const stickWorldPos = stickNode.parent.convertToWorldSpaceAR(stickNode.position);
//         const targetX = stickWorldPos.x + totalStickHeight;
//         const targetY = 288;
//         const newX = targetX - totalStickHeight / 1.06;
//         const targetPosition = this.node.parent.convertToNodeSpaceAR(cc.v2(newX, targetY));
//         const moveAction = cc.sequence(
//             cc.moveTo(1, targetPosition).easing(cc.easeCubicActionOut()),
//             cc.callFunc(() => {
//                 this.idleTimer = 0;
//             }),
//             cc.delayTime(1),
//             cc.callFunc(() => {
//                 if (!this.isOnPlatform) {
//                     this.node.setPosition(cc.v2(128, 0));
//                 }
//             })
//         );
//         this.node.runAction(moveAction);
//     }
// }

cc._RF.pop();
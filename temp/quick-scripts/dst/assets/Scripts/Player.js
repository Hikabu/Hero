
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUFrREM7UUFoREcsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUEwQzFDLENBQUM7SUF4Q0csNEJBQVcsR0FBWCxVQUFZLFNBQWtCLEVBQUUsZ0JBQXdCO1FBQXhELGlCQXVCQztRQXRCRyxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRixJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO1FBQ25ELElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFbkYsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FDMUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQzVELEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDLENBQUMsRUFDRixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25DOztnQkFFRyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0YsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUM7WUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDbEQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUc7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBQ0QsZ0NBQWUsR0FBZixVQUFnQixLQUFrQixFQUFFLElBQWlCO1FBQ2pELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ0k7SUFMcEIsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQWtEbEI7SUFBRCxhQUFDO0NBbERELEFBa0RDLENBbEQyQixFQUFFLENBQUMsU0FBUyxHQWtEdkM7QUFsRFksd0JBQU07QUFvRG5CLGFBQWE7QUFDYiwrQ0FBK0M7QUFFL0MsV0FBVztBQUNYLDZDQUE2QztBQUM3QyxxQ0FBcUM7QUFDckMsNkNBQTZDO0FBRTdDLGtFQUFrRTtBQUNsRSw0RkFBNEY7QUFDNUYsOERBQThEO0FBQzlELCtCQUErQjtBQUMvQiwwREFBMEQ7QUFDMUQsOEZBQThGO0FBRTlGLDBDQUEwQztBQUMxQyw0RUFBNEU7QUFDNUUsa0NBQWtDO0FBQ2xDLHNDQUFzQztBQUN0QyxrQkFBa0I7QUFDbEIsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyw0Q0FBNEM7QUFDNUMsNERBQTREO0FBQzVELG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsYUFBYTtBQUViLDJDQUEyQztBQUMzQyxRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmRQb3B1cE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGxvc2VyOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG4gICAgXG4gICAgcHJpdmF0ZSBpZGxlVGltZXI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpc09uUGxhdGZvcm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHdhbGtPblN0aWNrKHN0aWNrTm9kZTogY2MuTm9kZSwgdG90YWxTdGlja0hlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHN0aWNrV29ybGRQb3MgPSBzdGlja05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzdGlja05vZGUucG9zaXRpb24pO1xuICAgICAgICBjb25zdCB0YXJnZXRYID0gc3RpY2tXb3JsZFBvcy54ICsgdG90YWxTdGlja0hlaWdodDtcbiAgICAgICAgY29uc3QgdGFyZ2V0WSA9IDI4ODtcbiAgICAgICAgY29uc3QgbmV3WCA9IHRhcmdldFggLSB0b3RhbFN0aWNrSGVpZ2h0IC8gMS4wNjtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKG5ld1gsIHRhcmdldFkpKTtcblxuICAgICAgICBjb25zdCBtb3ZlQWN0aW9uID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgdGFyZ2V0UG9zaXRpb24pLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwLjI7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPblBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52MigxMjgsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRQb3B1cE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMSwgY2MudjIoMTI4LCAyODgpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4gICAgfVxuICAgIEVuZF9Qb3B1cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kUG9wdXBOb2RlLmFjdGl2ZSA9IHRydWUpe1xuICAgICAgICAgICAgY2MuZ2FtZS5lbmQoKTtcbiAgICAgICAgICAgIHRoaXMubG9zZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09PSAnUGxhdGZvcm0nICkge1xuICAgICAgICAgICAgdGhpcy5pc09uUGxhdGZvcm0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT09ICdQbGF0Zm9ybScpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPblBsYXRmb3JtID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qdG8gYmFja3VwKi9cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbi8vICAgICBwcml2YXRlIGlkbGVUaW1lcjogbnVtYmVyID0gMDtcbi8vICAgICBwcml2YXRlIGlzT25QbGF0Zm9ybTogYm9vbGVhbiA9IGZhbHNlO1xuXG4vLyAgICAgd2Fsa09uU3RpY2soc3RpY2tOb2RlOiBjYy5Ob2RlLCB0b3RhbFN0aWNrSGVpZ2h0OiBudW1iZXIpIHtcbi8vICAgICAgICAgY29uc3Qgc3RpY2tXb3JsZFBvcyA9IHN0aWNrTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHN0aWNrTm9kZS5wb3NpdGlvbik7XG4vLyAgICAgICAgIGNvbnN0IHRhcmdldFggPSBzdGlja1dvcmxkUG9zLnggKyB0b3RhbFN0aWNrSGVpZ2h0O1xuLy8gICAgICAgICBjb25zdCB0YXJnZXRZID0gMjg4O1xuLy8gICAgICAgICBjb25zdCBuZXdYID0gdGFyZ2V0WCAtIHRvdGFsU3RpY2tIZWlnaHQgLyAxLjA2O1xuLy8gICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIobmV3WCwgdGFyZ2V0WSkpO1xuXG4vLyAgICAgICAgIGNvbnN0IG1vdmVBY3Rpb24gPSBjYy5zZXF1ZW5jZShcbi8vICAgICAgICAgICAgIGNjLm1vdmVUbygxLCB0YXJnZXRQb3NpdGlvbikuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKSxcbi8vICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4vLyAgICAgICAgICAgICB9KSxcbi8vICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbi8vICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPblBsYXRmb3JtKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52MigxMjgsIDApKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICApO1xuXG4vLyAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cbiJdfQ==
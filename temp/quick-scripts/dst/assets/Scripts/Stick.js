
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Stick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQXVFQztRQXBFRyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxzQkFBZ0IsR0FBbUIsSUFBSSxDQUFDO1FBR3hDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFZixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7O0lBMEQ1QyxDQUFDO0lBeERHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVoRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pFO0lBQ0wsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFDdkQsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxLQUFlO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2xELENBQUM7SUFDRCw4QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsNkJBQVMsR0FBVDtRQUFBLGlCQW1CQztRQWxCRyxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUMxQixZQUFZLEVBQ1osRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFNLGVBQWUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxlQUFlLEVBQUU7b0JBQ2pCLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDdEU7YUFDSjtRQUNMLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNlO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFUZCxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBdUVyQjtJQUFELGdCQUFDO0NBdkVELEFBdUVDLENBdkU4QixFQUFFLENBQUMsU0FBUyxHQXVFMUM7QUF2RVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBTdGlja0dhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIHN0aWNrU0ZYOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3RpY2tTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RpY2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHRvdGFsU3RpY2tIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBvcmlnaW5hbFN0aWNrSGVpZ2h0OiBudW1iZXIgPSAwOyBcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zdGlja05vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBjb25zdCBzdGlja1Nwcml0ZSA9IHRoaXMuc3RpY2tOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzdGlja1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RpY2tTcHJpdGVGcmFtZTtcblxuICAgICAgICB0aGlzLnN0aWNrTm9kZS5hbmNob3JZID0gMDtcbiAgICAgICAgdGhpcy5zdGlja05vZGUud2lkdGggPSAxMDtcbiAgICAgICAgdGhpcy5zdGlja05vZGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0aWNrSGVpZ2h0ID0gdGhpcy5zdGlja05vZGUuaGVpZ2h0O1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zdGlja05vZGUpO1xuICAgICAgICB0aGlzLnRvdGFsU3RpY2tIZWlnaHQgPSB0aGlzLnN0aWNrTm9kZS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5ncm93U3RpY2ssIDAuMDAwMDAwMDAxKTsgLy8gR3Jvd1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdyb3dTdGljayk7XG4gICAgICAgIHRoaXMuZmFsbFN0aWNrKCk7XG4gICAgfVxuXG4gICAgZ3Jvd1N0aWNrKCkge1xuICAgICAgICB0aGlzLnRvdGFsU3RpY2tIZWlnaHQgKz0gMzA7XG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLmhlaWdodCA9IHRoaXMudG90YWxTdGlja0hlaWdodDtcbiAgICB9XG4gICAgcmVzZXRTdGljaygpIHtcbiAgICAgICAgdGhpcy5zdGlja05vZGUuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnN0aWNrTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfVxuICAgIGZhbGxTdGljaygpIHtcbiAgICAgICAgY29uc3Qgcm90YXRlQWN0aW9uID0gY2Mucm90YXRlVG8oMC41LCA5MCkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTsgLy8gUm90YXRlXG4gICAgICAgIHRoaXMuc3RpY2tTRlgucGxheSgpO1xuICAgICAgICBjb25zdCBtb3ZlQWN0aW9uID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICByb3RhdGVBY3Rpb24sXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckNvbXBvbmVudCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckNvbXBvbmVudC53YWxrT25TdGljayh0aGlzLnN0aWNrTm9kZSwgdGhpcy50b3RhbFN0aWNrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMiksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFN0aWNrKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnN0aWNrTm9kZS5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4gICAgfVxufVxuXG5cblxuIl19
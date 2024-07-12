
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQix5QkFBWTtJQUF2QztRQUFBLHFFQXFDQztRQW5DRyxzQkFBZ0IsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBaUN0QyxDQUFDO0lBL0JHLHNCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsNEJBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFXLEtBQWU7UUFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwyQkFBVyxHQUFYLFVBQVksS0FBZTtRQUN2Qix5Q0FBeUM7SUFDN0MsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFDSSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxxQ0FBcUM7UUFDdEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFsQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDZTtJQUYvQixLQUFLO1FBRGpCLE9BQU8sQ0FBQyxPQUFPLENBQUM7T0FDSixLQUFLLENBcUNqQjtJQUFELFlBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzBCLEVBQUUsQ0FBQyxTQUFTLEdBcUN0QztBQXJDWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTdGljaycpXG5leHBvcnQgY2xhc3MgU3RpY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBibG9ja1Nwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHN0aWNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmxvZygnU3RpY2sgb25Mb2FkZWQnKTtcbiAgICAgICAgdGhpcy5zdGlja05vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICB0aGlzLnN0aWNrTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5zdGlja05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJsb2NrU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLmFuY2hvclkgPSAwOyAvLyBBbmNob3IgYXQgdGhlIGJvdHRvbVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zdGlja05vZGUpO1xuXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCkge1xuICAgICAgICBjYy5sb2coJ1N0aWNrIG9uVG91Y2hTdGFydCcpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrLCAwLjEpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIGNjLmxvZygnU3RpY2sgb25Ub3VjaEVuZCcpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5ncm93U3RpY2spO1xuICAgIH1cblxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBjYy5Ub3VjaCkge1xuICAgICAgICAvLyBPcHRpb25hbGx5IGhhbmRsZSB0b3VjaCBtb3ZlIGlmIG5lZWRlZFxuICAgIH1cblxuICAgIGdyb3dTdGljaygpIHtcbiAgICAgICAgY29uc3Qgc3RpY2tIZWlnaHQgPSB0aGlzLnN0aWNrTm9kZS5oZWlnaHQgKyAxMDA7IC8vIEluY3JlYXNlIHN0aWNrIGhlaWdodCBieSAxMCBwaXhlbHNcbiAgICAgICAgdGhpcy5zdGlja05vZGUuaGVpZ2h0ID0gc3RpY2tIZWlnaHQ7XG4gICAgfVxufVxuIl19
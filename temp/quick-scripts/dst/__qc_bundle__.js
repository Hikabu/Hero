
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Background');
require('./assets/Scripts/Stick');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Background.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ed61AELK9FWYqVUh0FVG68', 'Background');
// Scripts/Background.ts

// const {ccclass, property} = cc._decorator;
// @ccclass ('Background')
// export default class Backgorund extends cc.Component {
//     @property({
//         type:Node,
//         tooltip: "Backround first here"
//     })
//     public background1: cc.Node = null;
//     @property({
//         type:Node,
//         tooltip: "Backgroung second here"
//     })
//     public background2: cc.Node = null;
// public backgroundWidth1:number;
// public backgroundWidth2:number;
// public tempStartLocation1 = new cc.Vec3;
// public tempStartLocation2 = new cc.Vec3;
// public moveSpeed = 50;
// onLoad(){
//     this.startUp();
// }
// startUp(){
//     this.backgroundWidth1 = this.background1.width;
//     this.backgroundWidth2 = this.background1.width; 
//     this.tempStartLocation1.x = 0;
//     this.tempStartLocation2.x = this.backgroundWidth1;
//     this.background1.setPosition(this.tempStartLocation1);
//     this.background2.setPosition(this.tempStartLocation2);
// }
//     update (dt: number){
//         this.tempStartLocation1 = this.background1.position;
//         this.tempStartLocation2 = this.background2.position;
//         this.tempStartLocation1.x -= this.moveSpeed * dt;
//         this.tempStartLocation2.x -= this.moveSpeed * dt;
//         const scene = cc.director.getScene();
//         const canvas = scene.getComponentInChildren(cc.Canvas);
//         if (this.tempStartLocation1.x <= (0 - this.backgroundWidth1)){
//             this.tempStartLocation1.x = this.backgroundWidth1;
//         }
//         if (this.tempStartLocation2.x <= (0 - this.backgroundWidth2)){
//             this.tempStartLocation2.x = this.backgroundWidth2;
//         }
//         this.background1.setPosition(this.tempStartLocation1);
//         this.background2.setPosition(this.tempStartLocation2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0JhY2tncm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsNkNBQTZDO0FBQzdDLDBCQUEwQjtBQUMxQix5REFBeUQ7QUFFekQsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQiwwQ0FBMEM7QUFDMUMsU0FBUztBQUNULDBDQUEwQztBQUUxQyxrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLDRDQUE0QztBQUM1QyxTQUFTO0FBQ1QsMENBQTBDO0FBRTFDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFFbEMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUUzQyx5QkFBeUI7QUFFekIsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixJQUFJO0FBQ0osYUFBYTtBQUNiLHNEQUFzRDtBQUN0RCx1REFBdUQ7QUFFdkQscUNBQXFDO0FBQ3JDLHlEQUF5RDtBQUV6RCw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELElBQUk7QUFFSiwyQkFBMkI7QUFFM0IsK0RBQStEO0FBQy9ELCtEQUErRDtBQUUvRCw0REFBNEQ7QUFDNUQsNERBQTREO0FBRTVELGdEQUFnRDtBQUNoRCxrRUFBa0U7QUFFbEUseUVBQXlFO0FBQ3pFLGlFQUFpRTtBQUNqRSxZQUFZO0FBQ1oseUVBQXlFO0FBQ3pFLGlFQUFpRTtBQUNqRSxZQUFZO0FBR1osaUVBQWlFO0FBQ2pFLGlFQUFpRTtBQUNqRSxRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuLy8gY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG4vLyBAY2NjbGFzcyAoJ0JhY2tncm91bmQnKVxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFja2dvcnVuZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbi8vICAgICBAcHJvcGVydHkoe1xuLy8gICAgICAgICB0eXBlOk5vZGUsXG4vLyAgICAgICAgIHRvb2x0aXA6IFwiQmFja3JvdW5kIGZpcnN0IGhlcmVcIlxuLy8gICAgIH0pXG4vLyAgICAgcHVibGljIGJhY2tncm91bmQxOiBjYy5Ob2RlID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eSh7XG4vLyAgICAgICAgIHR5cGU6Tm9kZSxcbi8vICAgICAgICAgdG9vbHRpcDogXCJCYWNrZ3JvdW5nIHNlY29uZCBoZXJlXCJcbi8vICAgICB9KVxuLy8gICAgIHB1YmxpYyBiYWNrZ3JvdW5kMjogY2MuTm9kZSA9IG51bGw7XG5cbi8vIHB1YmxpYyBiYWNrZ3JvdW5kV2lkdGgxOm51bWJlcjtcbi8vIHB1YmxpYyBiYWNrZ3JvdW5kV2lkdGgyOm51bWJlcjtcblxuLy8gcHVibGljIHRlbXBTdGFydExvY2F0aW9uMSA9IG5ldyBjYy5WZWMzO1xuLy8gcHVibGljIHRlbXBTdGFydExvY2F0aW9uMiA9IG5ldyBjYy5WZWMzO1xuXG4vLyBwdWJsaWMgbW92ZVNwZWVkID0gNTA7XG5cbi8vIG9uTG9hZCgpe1xuLy8gICAgIHRoaXMuc3RhcnRVcCgpO1xuLy8gfVxuLy8gc3RhcnRVcCgpe1xuLy8gICAgIHRoaXMuYmFja2dyb3VuZFdpZHRoMSA9IHRoaXMuYmFja2dyb3VuZDEud2lkdGg7XG4vLyAgICAgdGhpcy5iYWNrZ3JvdW5kV2lkdGgyID0gdGhpcy5iYWNrZ3JvdW5kMS53aWR0aDsgXG5cbi8vICAgICB0aGlzLnRlbXBTdGFydExvY2F0aW9uMS54ID0gMDtcbi8vICAgICB0aGlzLnRlbXBTdGFydExvY2F0aW9uMi54ID0gdGhpcy5iYWNrZ3JvdW5kV2lkdGgxO1xuXG4vLyAgICAgdGhpcy5iYWNrZ3JvdW5kMS5zZXRQb3NpdGlvbih0aGlzLnRlbXBTdGFydExvY2F0aW9uMSk7XG4vLyAgICAgdGhpcy5iYWNrZ3JvdW5kMi5zZXRQb3NpdGlvbih0aGlzLnRlbXBTdGFydExvY2F0aW9uMik7XG4vLyB9XG5cbi8vICAgICB1cGRhdGUgKGR0OiBudW1iZXIpe1xuXG4vLyAgICAgICAgIHRoaXMudGVtcFN0YXJ0TG9jYXRpb24xID0gdGhpcy5iYWNrZ3JvdW5kMS5wb3NpdGlvbjtcbi8vICAgICAgICAgdGhpcy50ZW1wU3RhcnRMb2NhdGlvbjIgPSB0aGlzLmJhY2tncm91bmQyLnBvc2l0aW9uO1xuICAgICAgICBcbi8vICAgICAgICAgdGhpcy50ZW1wU3RhcnRMb2NhdGlvbjEueCAtPSB0aGlzLm1vdmVTcGVlZCAqIGR0O1xuLy8gICAgICAgICB0aGlzLnRlbXBTdGFydExvY2F0aW9uMi54IC09IHRoaXMubW92ZVNwZWVkICogZHQ7XG4gICAgICAgIFxuLy8gICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4vLyAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuQ2FudmFzKTtcblxuLy8gICAgICAgICBpZiAodGhpcy50ZW1wU3RhcnRMb2NhdGlvbjEueCA8PSAoMCAtIHRoaXMuYmFja2dyb3VuZFdpZHRoMSkpe1xuLy8gICAgICAgICAgICAgdGhpcy50ZW1wU3RhcnRMb2NhdGlvbjEueCA9IHRoaXMuYmFja2dyb3VuZFdpZHRoMTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAodGhpcy50ZW1wU3RhcnRMb2NhdGlvbjIueCA8PSAoMCAtIHRoaXMuYmFja2dyb3VuZFdpZHRoMikpe1xuLy8gICAgICAgICAgICAgdGhpcy50ZW1wU3RhcnRMb2NhdGlvbjIueCA9IHRoaXMuYmFja2dyb3VuZFdpZHRoMjtcbi8vICAgICAgICAgfVxuXG5cbi8vICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kMS5zZXRQb3NpdGlvbih0aGlzLnRlbXBTdGFydExvY2F0aW9uMSk7XG4vLyAgICAgICAgIHRoaXMuYmFja2dyb3VuZDIuc2V0UG9zaXRpb24odGhpcy50ZW1wU3RhcnRMb2NhdGlvbjIpO1xuLy8gICAgIH1cbi8vIH1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

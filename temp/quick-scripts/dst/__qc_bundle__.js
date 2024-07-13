
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
require('./assets/Scripts/Player');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQTBEQztRQXhERyxzQkFBZ0IsR0FBbUIsSUFBSSxDQUFDO1FBR3hDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFZixlQUFTLEdBQVksSUFBSSxDQUFDOztJQW1EdEMsQ0FBQztJQWpERywwQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyx3Q0FBd0M7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5DLDZDQUE2QztRQUM3QyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJ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QUFLSiwrQ0FBK0M7QUFFL0Msb0JBQW9CO0FBQ3BCLDRDQUE0QztBQUM1QyxnQ0FBZ0M7QUFDaEMsK0NBQStDO0FBRS9DLHlDQUF5QztBQUV6QyxpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLDBDQUEwQztBQUMxQyxrREFBa0Q7QUFDbEQsc0ZBQXNGO0FBQ3RGLDhEQUE4RDtBQUM5RCw4Q0FBOEM7QUFFOUMsd0RBQXdEO0FBQ3hELDRDQUE0QztBQUM1Qyx3QkFBd0I7QUFDeEIsaUZBQWlGO0FBQ2pGLDZFQUE2RTtBQUM3RSxZQUFZO0FBQ1osUUFBUTtBQUVSLHNDQUFzQztBQUN0Qyx3Q0FBd0M7QUFDeEMsOENBQThDO0FBQzlDLFFBQVE7QUFFUixvQ0FBb0M7QUFDcEMsc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQyxRQUFRO0FBRVIsb0JBQW9CO0FBQ3BCLGlHQUFpRztBQUNqRywrQ0FBK0M7QUFDL0MsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFN0aWNrR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGJsb2NrU3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHN0aWNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNjLmxvZygnU3RpY2tHYW1lIG9uTG9hZGVkJyk7XG4gICAgICAgIHRoaXMuc3RpY2tOb2RlID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgY29uc3Qgc3RpY2tTcHJpdGUgPSB0aGlzLnN0aWNrTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgc3RpY2tTcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmJsb2NrU3ByaXRlRnJhbWU7XG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLmFuY2hvclkgPSAwOyAvLyBBbmNob3IgYXQgdGhlIGJvdHRvbVxuICAgICAgICB0aGlzLnN0aWNrTm9kZS53aWR0aCA9IDEwOyAvLyBTZXQgYSBmaXhlZCB3aWR0aCB0byBhdm9pZCBkaXN0b3J0aW9uXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnN0aWNrTm9kZSk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHRvdWNoIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgY2FudmFzXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIGNjLmxvZygnU3RpY2tHYW1lIG9uVG91Y2hTdGFydCcpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrLCAwLjEpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIGNjLmxvZygnU3RpY2tHYW1lIG9uVG91Y2hFbmQnKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrKTtcbiAgICAgICAgdGhpcy5mYWxsU3RpY2soKTtcbiAgICB9XG5cbiAgICBncm93U3RpY2soKSB7XG4gICAgICAgIGNvbnN0IHN0aWNrSGVpZ2h0ID0gdGhpcy5zdGlja05vZGUuaGVpZ2h0ICsgMTAwOyAvLyBJbmNyZWFzZSBzdGljayBoZWlnaHQgYnkgMTAgcGl4ZWxzXG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLmhlaWdodCA9IHN0aWNrSGVpZ2h0O1xuICAgIH1cblxuICAgIGZhbGxTdGljaygpIHtcbiAgICAgICAgY2MubG9nKCdTdGljayBmYWxsaW5nJyk7XG4gICAgICAgIGNvbnN0IHJvdGF0ZUFjdGlvbiA9IGNjLnJvdGF0ZVRvKDAuNSwgOTApLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7IC8vIFJvdGF0ZSA5MCBkZWdyZWVzIGluIDAuNSBzZWNvbmRzXG4gICAgICAgIGNvbnN0IG1vdmVBY3Rpb24gPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIHJvdGF0ZUFjdGlvbixcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheWVyQ29tcG9uZW50ID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQ29tcG9uZW50Lm1vdmUodGhpcy5zdGlja05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLnJ1bkFjdGlvbihtb3ZlQWN0aW9uKTtcbiAgICB9XG59XG5cblxuXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzcygnU3RpY2snKVxuLy8gZXhwb3J0IGNsYXNzIFN0aWNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbi8vICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4vLyAgICAgYmxvY2tTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4vLyAgICAgcHJpdmF0ZSBzdGlja05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4vLyAgICAgb25Mb2FkKCkge1xuLy8gICAgICAgICBjYy5sb2coJ1N0aWNrIG9uTG9hZGVkJyk7XG4vLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlID0gbmV3IGNjLk5vZGUoKTtcbi8vICAgICAgICAgdGhpcy5zdGlja05vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4vLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5ibG9ja1Nwcml0ZUZyYW1lO1xuLy8gICAgICAgICB0aGlzLnN0aWNrTm9kZS5hbmNob3JZID0gMDsgLy8gQW5jaG9yIGF0IHRoZSBib3R0b21cbi8vICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuc3RpY2tOb2RlKTtcblxuLy8gICAgICAgICAvLyBUIGxpc3RlbmVyc1xuLy8gICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKCdDYW52YXMnKTtcbi8vICAgICAgICAgaWYgKGNhbnZhcykge1xuLy8gICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4vLyAgICAgICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCkge1xuLy8gICAgICAgICBjYy5sb2coJ1N0aWNrIG9uVG91Y2hTdGFydCcpO1xuLy8gICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrLCAwLjEpO1xuLy8gICAgIH1cblxuLy8gICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4vLyAgICAgICAgIGNjLmxvZygnU3RpY2sgb25Ub3VjaEVuZCcpO1xuLy8gICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5ncm93U3RpY2spO1xuLy8gICAgICAgICB0aGlzLmZhbGxTdGljaygpO1xuLy8gICAgIH1cblxuLy8gICAgIGdyb3dTdGljaygpIHtcbi8vICAgICAgICAgY29uc3Qgc3RpY2tIZWlnaHQgPSB0aGlzLnN0aWNrTm9kZS5oZWlnaHQgKyAxMDA7IC8vIEluY3JlYXNlXG4vLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmhlaWdodCA9IHN0aWNrSGVpZ2h0O1xuLy8gICAgIH1cblxuLy8gICAgIGZhbGxTdGljaygpIHtcbi8vICAgICAgICAgY2MubG9nKCdTdGljayBmYWxsaW5nJyk7XG4vLyAgICAgICAgIGNvbnN0IHJvdGF0ZUFjdGlvbiA9IGNjLnJvdGF0ZVRvKDAuNSwgOTApLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7IC8vIFJvdGF0ZVxuLy8gICAgICAgICB0aGlzLnN0aWNrTm9kZS5ydW5BY3Rpb24ocm90YXRlQWN0aW9uKTtcbi8vICAgICB9XG4vLyB9XG5cblxuXG5cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzKCdTdGljaycpXG4vLyBleHBvcnQgY2xhc3MgU3RpY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuLy8gICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbi8vICAgICBibG9ja1Nwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbi8vICAgICBwcml2YXRlIHN0aWNrTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICBvbkxvYWQoKSB7XG4vLyAgICAgICAgIGNjLmxvZygnU3RpY2sgb25Mb2FkZWQnKTtcbi8vICAgICAgICAgdGhpcy5zdGlja05vZGUgPSBuZXcgY2MuTm9kZSgpO1xuLy8gICAgICAgICB0aGlzLnN0aWNrTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbi8vICAgICAgICAgdGhpcy5zdGlja05vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJsb2NrU3ByaXRlRnJhbWU7XG4vLyAgICAgICAgIHRoaXMuc3RpY2tOb2RlLmFuY2hvclkgPSAwOyAvLyBBbmNob3IgYXQgdGhlIGJvdHRvbVxuLy8gICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zdGlja05vZGUpO1xuXG4vLyAgICAgICAgIC8vIEF0dGFjaCB0b3VjaCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGNhbnZhc1xuLy8gICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKCdDYW52YXMnKTtcbi8vICAgICAgICAgaWYgKGNhbnZhcykge1xuLy8gICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4vLyAgICAgICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5Ub3VjaCkge1xuLy8gICAgICAgICBjYy5sb2coJ1N0aWNrIG9uVG91Y2hTdGFydCcpO1xuLy8gICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ3Jvd1N0aWNrLCAwLjEpO1xuLy8gICAgIH1cblxuLy8gICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4vLyAgICAgICAgIGNjLmxvZygnU3RpY2sgb25Ub3VjaEVuZCcpO1xuLy8gICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5ncm93U3RpY2spO1xuLy8gICAgIH1cblxuLy8gICAgIGdyb3dTdGljaygpIHtcbi8vICAgICAgICAgY29uc3Qgc3RpY2tIZWlnaHQgPSB0aGlzLnN0aWNrTm9kZS5oZWlnaHQgKyAxMDA7IC8vIEluY3JlYXNlIHN0aWNrIGhlaWdodCBieSAxMCBwaXhlbHNcbi8vICAgICAgICAgdGhpcy5zdGlja05vZGUuaGVpZ2h0ID0gc3RpY2tIZWlnaHQ7XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.move = function (stickHeight) {
        cc.log('Player moving');
        var targetPosition = cc.v2(this.node.x + stickHeight, this.node.y);
        var moveAction = cc.moveTo(1, targetPosition).easing(cc.easeCubicActionOut()); // Move player to the end of the stick
        this.node.runAction(moveAction);
    };
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFBeEM7O0lBT0EsQ0FBQztJQU5HLHFCQUFJLEdBQUosVUFBSyxXQUFtQjtRQUNwQixFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hCLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7UUFDdkgsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQU5RLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0FPbEI7SUFBRCxhQUFDO0NBUEQsQUFPQyxDQVAyQixFQUFFLENBQUMsU0FBUyxHQU92QztBQVBZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG1vdmUoc3RpY2tIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBjYy5sb2coJ1BsYXllciBtb3ZpbmcnKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBjYy52Mih0aGlzLm5vZGUueCArIHN0aWNrSGVpZ2h0LCB0aGlzLm5vZGUueSk7XG4gICAgICAgIGNvbnN0IG1vdmVBY3Rpb24gPSBjYy5tb3ZlVG8oMSwgdGFyZ2V0UG9zaXRpb24pLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7IC8vIE1vdmUgcGxheWVyIHRvIHRoZSBlbmQgb2YgdGhlIHN0aWNrXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

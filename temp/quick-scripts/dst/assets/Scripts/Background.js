
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
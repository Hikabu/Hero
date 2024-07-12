"use strict";
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
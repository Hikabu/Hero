const { ccclass, property } = cc._decorator;

@ccclass
export class Player extends cc.Component {
    move(stickHeight: number) {
        cc.log('Player moving');
        const targetPosition = cc.v2(this.node.x + stickHeight, this.node.y);
        const moveAction = cc.moveTo(1, targetPosition).easing(cc.easeCubicActionOut()); // Move player to the end of the stick
        this.node.runAction(moveAction);
    }
}

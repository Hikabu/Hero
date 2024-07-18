const { ccclass, property } = cc._decorator;

@ccclass
export class Player extends cc.Component {
    @property(cc.Node)
    endPopupNode: cc.Node = null;

    @property(cc.AudioSource)
    loser: cc.AudioSource = null;
    
    private idleTimer: number = 0;
    private isOnPlatform: boolean = false;

    walkOnStick(stickNode: cc.Node, totalStickHeight: number) {
        const stickWorldPos = stickNode.parent.convertToWorldSpaceAR(stickNode.position);
        const targetX = stickWorldPos.x + totalStickHeight;
        const targetY = 288;
        const newX = targetX - totalStickHeight / 1.06;
        const targetPosition = this.node.parent.convertToNodeSpaceAR(cc.v2(newX, targetY));

        const moveAction = cc.sequence(
            cc.moveTo(1, targetPosition).easing(cc.easeCubicActionOut()),
            cc.callFunc(() => {
                this.idleTimer = 0.2;
            }),
            cc.delayTime(1),
            cc.callFunc(() => {
                if (!this.isOnPlatform) {
                    this.node.setPosition(cc.v2(128, 0));
                    this.endPopupNode.active = true;
                }
                else 
                    this.node.runAction(cc.moveTo(1, cc.v2(128, 288)).easing(cc.easeCubicActionOut()));
            })
        );
        this.node.runAction(moveAction);
    }
    End_Popup() {
        if (this.endPopupNode.active = true){
            cc.game.end();
            this.loser.play();
        }
    }
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.node.name === 'Platform' ) {
            this.isOnPlatform = true;
        }
    }
    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        if (other.node.name === 'Platform') {
            this.isOnPlatform = false;
        }
    }
}

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






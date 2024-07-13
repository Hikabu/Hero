const { ccclass, property } = cc._decorator;

@ccclass
export class StickGame extends cc.Component {
    @property(cc.SpriteFrame)
    blockSpriteFrame: cc.SpriteFrame = null;

    @property(cc.Node)
    player: cc.Node = null;

    private stickNode: cc.Node = null;

    onLoad() {
        cc.log('StickGame onLoaded');
        this.stickNode = new cc.Node();
        const stickSprite = this.stickNode.addComponent(cc.Sprite);
        stickSprite.spriteFrame = this.blockSpriteFrame;
        this.stickNode.anchorY = 0; // Anchor at the bottom
        this.stickNode.width = 10; // Set a fixed width to avoid distortion
        this.node.addChild(this.stickNode);

        // Attach touch event listeners to the canvas
        const canvas = cc.find('Canvas');
        if (canvas) {
            canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }
    }

    onTouchStart(event: cc.Touch) {
        cc.log('StickGame onTouchStart');
        this.schedule(this.growStick, 0.1);
    }

    onTouchEnd(event: cc.Touch) {
        cc.log('StickGame onTouchEnd');
        this.unschedule(this.growStick);
        this.fallStick();
    }

    growStick() {
        const stickHeight = this.stickNode.height + 100; // Increase stick height by 10 pixels
        this.stickNode.height = stickHeight;
    }

    fallStick() {
        cc.log('Stick falling');
        const rotateAction = cc.rotateTo(0.5, 90).easing(cc.easeCubicActionOut()); // Rotate 90 degrees in 0.5 seconds
        const moveAction = cc.sequence(
            rotateAction,
            cc.callFunc(() => {
                if (this.player) {
                    const playerComponent = this.player.getComponent('Player');
                    if (playerComponent) {
                        playerComponent.move(this.stickNode.height);
                    }
                }
            })
        );
        this.stickNode.runAction(moveAction);
    }
}



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






const { ccclass, property } = cc._decorator;

@ccclass('Stick')
export class Stick extends cc.Component {
    @property(cc.SpriteFrame)
    blockSpriteFrame: cc.SpriteFrame = null;

    private stickNode: cc.Node = null;

    onLoad() {
        cc.log('Stick onLoaded');
        this.stickNode = new cc.Node();
        this.stickNode.addComponent(cc.Sprite);
        this.stickNode.getComponent(cc.Sprite).spriteFrame = this.blockSpriteFrame;
        this.stickNode.anchorY = 0; // Anchor at the bottom
        this.node.addChild(this.stickNode);

        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchStart(event: cc.Touch) {
        cc.log('Stick onTouchStart');
        this.schedule(this.growStick, 0.1);
    }

    onTouchEnd(event: cc.Touch) {
        cc.log('Stick onTouchEnd');
        this.unschedule(this.growStick);
    }

    onTouchMove(event: cc.Touch) {
        // Optionally handle touch move if needed
    }

    growStick() {
        const stickHeight = this.stickNode.height + 100; // Increase stick height by 10 pixels
        this.stickNode.height = stickHeight;
    }
}

const { ccclass, property } = cc._decorator;
@ccclass
export class StickGame extends cc.Component {

    @property(cc.AudioSource)
    stickSFX: cc.AudioSource = null;

    @property(cc.SpriteFrame)
    stickSpriteFrame: cc.SpriteFrame = null;

    @property(cc.Node)
    player: cc.Node = null;

    private stickNode: cc.Node = null;
    private totalStickHeight: number = 0;
    private originalStickHeight: number = 0; 

    onLoad() {
        this.stickNode = new cc.Node();
        const stickSprite = this.stickNode.addComponent(cc.Sprite);
        stickSprite.spriteFrame = this.stickSpriteFrame;

        this.stickNode.anchorY = 0;
        this.stickNode.width = 10;
        this.stickNode.height = 0;
        this.originalStickHeight = this.stickNode.height;
        this.node.addChild(this.stickNode);
        this.totalStickHeight = this.stickNode.height;
        const canvas = cc.find('Canvas');
        if (canvas) {
            canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }
    }

    onTouchStart(event: cc.Touch) {
        this.schedule(this.growStick, 0.000000001); // Grow
    }

    onTouchEnd(event: cc.Touch) {
        this.unschedule(this.growStick);
        this.fallStick();
    }

    growStick() {
        this.totalStickHeight += 30;
        this.stickNode.height = this.totalStickHeight;
    }
    resetStick() {
        this.stickNode.destroy();
        this.stickNode = new cc.Node();
        this.onLoad();
    }
    fallStick() {
        const rotateAction = cc.rotateTo(0.5, 90).easing(cc.easeCubicActionOut()); // Rotate
        this.stickSFX.play();
        const moveAction = cc.sequence(
            rotateAction,
            cc.callFunc(() => {
                if (this.player) {
                    const playerComponent = this.player.getComponent('Player');
                    if (playerComponent) {
                        playerComponent.walkOnStick(this.stickNode, this.totalStickHeight);
                    }
                }
            }),
            cc.delayTime(1.2),
            cc.callFunc(() => {
                this.resetStick();
            })
        );
        this.stickNode.runAction(moveAction);
    }
}




const { ccclass, property } = cc._decorator;
@ccclass
export default class BackgroundLooper extends cc.Component {
    @property(cc.Node)
    background1: cc.Node = null;
    @property(cc.Node)
    background2: cc.Node = null;
    @property(cc.Node)
    background3: cc.Node = null;
    @property
    moveSpeed: number = 50;

    start() {
        this.background2.x = this.background1.x + this.background1.width;
        this.background2.y = this.background1.y;

        this.background3.x = this.background2.x + this.background2.width;
        this.background3.y = this.background1.y;
    }
    update(dt: number) {
        const relativeSpeed1 = this.moveSpeed * (this.background1.width / this.background2.width);
        const relativeSpeed2 = this.moveSpeed * (this.background2.width / this.background3.width);

        this.background1.x -= relativeSpeed1 * dt;
        this.background2.x -= this.moveSpeed * dt;
        this.background3.x -= relativeSpeed2 * dt;
        if (this.background1.x <= -this.background1.width) {
            this.background1.x = this.background3.x + this.background3.width;
        }
        if (this.background2.x <= -this.background2.width) {
            this.background2.x = this.background1.x + this.background1.width;
        }
        if (this.background3.x <= -this.background3.width) {
            this.background3.x = this.background2.x + this.background2.width;
        }
    }
}




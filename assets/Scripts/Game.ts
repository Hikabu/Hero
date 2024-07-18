const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformSpawner extends cc.Component {
    @property(cc.Prefab)
    platformPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    specialPlatformPrefab: cc.Prefab = null; 
    @property(cc.Node)
    background: cc.Node = null;
    @property(cc.Node)
    player: cc.Node = null;
    @property(cc.Label)
    scoreLabel: cc.Label = null;
    playerScore: number = 0;
    private lastPlatformX: number = 0;

    onLoad() {
        this.lastPlatformX = this.background.x;
        this.spawnInitialPlatform();
        this.schedule(this.spawnSpecialPlatform, 4);
        cc.director.getCollisionManager().enabled = true;
    }

    gainScore() {
        this.playerScore += 1;
        this.scoreLabel.string = this.playerScore.toString();
    }

    gainSpec() {
        this.playerScore += 2;
        this.scoreLabel.string = this.playerScore.toString();
    }
    spawnInitialPlatform() {
        this.spawnPlatform();
    }

    spawnPlatform() {
        const newPlatform = cc.instantiate(this.platformPrefab);
        this.node.addChild(newPlatform);
        newPlatform.setPosition(this.getNewPlatformPosition());
    }

    getNewPlatformPosition() {
        const minX = this.lastPlatformX + 200;
        const maxX = this.lastPlatformX + 400;
        const randX = Math.random() * (maxX - minX) + minX;
        this.lastPlatformX = randX;
        const randY = 0;
        
        return cc.v2(randX, randY);
    }
    spawnSpecialPlatform() {
        const newSpecialPlatform = cc.instantiate(this.specialPlatformPrefab);
        this.node.addChild(newSpecialPlatform);
        const specialX = Math.random() < 0.5 ? 460 : 650;
        const specialY = 0;
        newSpecialPlatform.setPosition(cc.v2(specialX, specialY));
    }
    onCollisionEnter(selfCollider, otherCollider) {
        if (otherCollider.name === 'Platform<BoxCollider>') {
            this.gainScore();
            cc.delayTime(3);
            otherCollider.node.destroy();
        }
        else
        {
            this.gainSpec();
            cc.delayTime(3);
            otherCollider.node.destroy();
        }
    }
    start() {
        
        }
}








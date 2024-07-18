const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    touchRadius: number = 0; 

    onCollisionEnter(selfCollider, otherCollider) {
        // if(otherCollider.name == 'Platform<BoxCollider>')
        {
        //    this.node.parent.getComponent('Platform').spawnPlatform();
            console.log('on collision enter');
            // this.node.destroy();
        }
}
    onLoad(){
            var manager = cc.director.getCollisionManager();
            manager.enabled = true;
            // manager.enabledDebugDraw = true;
            // manager.enabledDrawBoundingBox = true;
    }   
    start () {

    }
    update (dt) {}
}

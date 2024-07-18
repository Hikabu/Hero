
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.AudioSource)
    backgroundMusic: cc.AudioSource = null;
    @property(cc.Node)
    endPopupNode: cc.Node = null;
    @property(cc.AudioSource)
    loser: cc.AudioSource = null;
    propetries: {
    }
    Show_Popup(){
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node) 
        .to(0.5, {scale: 1, opacity: 255}, {easing: 'quarterInOut'})
        .start();
        
    }
    Hide_Popup(){
        cc.tween(this.node)
        .to(0.5, {scale: 0.2, opacity: 0}, {easing: 'quarterInOut'})
        .call(() => {
            this.node.active = false;
        })
        .start();
    }
    Restart_Clicked(){
        this.Hide_Popup();
        // cc.director.loadScene('Game');
        cc.game.restart();
    }

    Play_Clicked(){
        if (this.backgroundMusic && !this.backgroundMusic.isPlaying) {
            this.backgroundMusic.play();
        }
        this.Hide_Popup();
            cc.director.loadScene('Game');
    }

    End_Popup(){
        if (this.endPopupNode) {
            cc.game.end();
            this.loser.play();
        }
    }
}

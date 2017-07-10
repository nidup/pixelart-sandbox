
import {Alien} from "../../world/ufo";

export default class Menu extends Phaser.State {

    private titleText : Phaser.BitmapText;
    private subtitleText : Phaser.BitmapText;
    private startText : Phaser.BitmapText;

    public create ()
    {
        this.game.stage.backgroundColor = '#1b1128';

        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);

        this.titleText = this.game.add.bitmapText(40, 100, 'carrier-command','PhaserJS SandBox', 27);
        this.subtitleText = this.game.add.bitmapText(40, 140, 'carrier-command','XXXX Game Jam #x by nidup', 10);

        this.startText = this.game.add.bitmapText(240, 450, 'carrier-command','Press space to start', 10);

        const unitLayer = this.game.add.group();
        unitLayer.name = 'Unit';


        const alien1 = new Alien(unitLayer, 300, 300);
        alien1.animations.play('idle');


        const alien2 = new Alien(unitLayer, 400, 300);
        alien2.animations.play('killed');


        console.log(this.game);


        /*
        const ufo = this.game.add.sprite(300, 300, 'characters', 0);
        ufo.anchor.setTo(.5, .5);
        ufo.scale.setTo(2, 2);
        unitLayer.game.physics.enable(ufo, Phaser.Physics.ARCADE);

        ufo.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7], 4, true);
        ufo.animations.add('killed', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 4, true);
        ufo.animations.play('killed');
        */


    }

    public startGame ()
    {
        this.game.state.start('Play');
    }

    public shutdown ()
    {
        this.titleText.destroy();
        this.subtitleText.destroy();
        this.startText.destroy();
    }
}

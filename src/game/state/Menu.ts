
import {Alien} from "../../world/ufo";
import {Jojo} from "../../world/jojo";

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

//        this.startText = this.game.add.bitmapText(240, 450, 'carrier-command','Press space to start', 10);

        const unitLayer = this.game.add.group();
        unitLayer.name = 'Unit';

        const test = 'jojo';

        if (test != 'jojo') {

            const alien1 = new Alien(unitLayer, 100, 200);
            alien1.animations.play('idle');


            const alien2 = new Alien(unitLayer, 200, 200);
            alien2.animations.play('killed');

            const alien3 = new Alien(unitLayer, 300, 200);
            alien3.animations.play('headshot');

            const alien4 = new Alien(unitLayer, 400, 200);
            alien4.animations.play('falling');

            const alien5 = new Alien(unitLayer, 500, 200);
            alien5.animations.play('headshot2');

        } else {

            const jojo1 = new Jojo(unitLayer, 100, 200);
            jojo1.animations.play('idle');

            const jojo2 = new Jojo(unitLayer, 180, 200);
            jojo2.animations.play('shot');

            const jojo3 = new Jojo(unitLayer, 260, 200);
            jojo3.animations.play('walk');

        }

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

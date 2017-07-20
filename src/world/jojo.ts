
export class Jojo extends Phaser.Sprite
{
    constructor(group: Phaser.Group, x: number, y: number)
    {
        super(group.game, x, y, 'jojo', 0);

        this.anchor.setTo(.5, .5);
        this.scale.setTo(1.5, 1.5);
        group.game.physics.enable(this, Phaser.Physics.ARCADE);
        group.add(this);

        this.animations.add('idle', [0, 1, 2, 3], 4, true);
        this.animations.add('shot', [4, 5, 6, 7], 4, true);
        this.animations.add('walk', [8, 9, 10, 11], 4, true);
    }
}

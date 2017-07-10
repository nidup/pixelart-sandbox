
export class Alien extends Phaser.Sprite
{
    constructor(group: Phaser.Group, x: number, y: number)
    {
        super(group.game, x, y, 'characters', 0);

        this.anchor.setTo(.5, .5);
        this.scale.setTo(2, 2);
        group.game.physics.enable(this, Phaser.Physics.ARCADE);
        group.add(this);

        this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7], 4, true);
        this.animations.add('killed', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 8, true);
    }
}

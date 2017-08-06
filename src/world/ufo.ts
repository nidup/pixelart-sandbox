
export class Alien extends Phaser.Sprite
{
    constructor(group: Phaser.Group, x: number, y: number)
    {
        super(group.game, x, y, 'characters', 0);

        this.anchor.setTo(.5, .5);
        this.scale.setTo(1.5, 1.5);
        group.game.physics.enable(this, Phaser.Physics.ARCADE);
        group.add(this);

        this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7], 4, true);
        this.animations.add('killed', [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 8, true);
        this.animations.add('headshot', [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 8, true);
        this.animations.add('falling', [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63], 8, true);
        this.animations.add('headshot2', [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83], 8, true);
    }
}

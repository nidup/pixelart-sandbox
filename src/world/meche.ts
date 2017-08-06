
export class Meche extends Phaser.Sprite
{
    constructor(group: Phaser.Group, x: number, y: number, key: string, frames: number[], rate: number, loop: boolean)
    {
        super(group.game, x, y, key, 0);

        this.anchor.setTo(.5, .5);
        this.scale.setTo(2, 2);
        group.game.physics.enable(this, Phaser.Physics.ARCADE);
        group.add(this);

        this.animations.add(key, frames, rate, loop);
        this.animations.play(key);
    }
}

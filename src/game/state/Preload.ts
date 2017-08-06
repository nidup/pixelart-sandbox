
export default class Preload extends Phaser.State {

    public preload ()
    {
        this.loadAudio()
        this.loadTilemap();
        this.loadTileImages();
        this.loadGameImages();
        this.loadUIImages();
    }

    public create ()
    {
        this.game.state.start('Menu'); // TODO: shortcuting "Menu" state :)
    }

    private loadAudio()
    {
    }

    private loadTilemap()
    {
    }

    private loadTileImages()
    {
    }

    private loadGameImages()
    {
        this.load.spritesheet('characters', 'assets/sprites/ufo/characters.png', 32, 32);
        this.load.spritesheet('jojo', 'assets/sprites/jojo/jojo.png', 32, 32);
    }

    private loadUIImages()
    {
        this.load.bitmapFont('carrier-command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    }
}

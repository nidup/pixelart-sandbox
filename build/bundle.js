/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../lib/phaser.d.ts"/>

Object.defineProperty(exports, "__esModule", { value: true });
const Boot_1 = __webpack_require__(1);
const Preload_1 = __webpack_require__(4);
const Menu_1 = __webpack_require__(2);
const Play_1 = __webpack_require__(3);
class SimpleGame extends Phaser.Game {
    constructor() {
        super(1280, 800, Phaser.CANVAS, "content", null);
        this.antialias = false;
        this.state.add('Boot', Boot_1.default);
        this.state.add('Preload', Preload_1.default);
        this.state.add('Menu', Menu_1.default);
        this.state.add('Play', Play_1.default);
        this.state.start('Boot');
    }
}
window.onload = () => {
    new SimpleGame();
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Boot extends Phaser.State {
    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.state.start('Preload');
    }
}
exports.default = Boot;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ufo_1 = __webpack_require__(6);
const jojo_1 = __webpack_require__(5);
class Menu extends Phaser.State {
    create() {
        this.game.stage.backgroundColor = '#1b1128';
        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);
        this.titleText = this.game.add.bitmapText(850, 700, 'carrier-command', 'PixelArt SandBox', 20);
        this.subtitleText = this.game.add.bitmapText(850, 740, 'carrier-command', 'XXXX Game Jam #x by nidup', 10);
        //        this.startText = this.game.add.bitmapText(240, 450, 'carrier-command','Press space to start', 10);
        const unitLayer = this.game.add.group();
        unitLayer.name = 'Unit';
        const test = 'jojo';
        //        if (test != 'jojo') {
        const alien1 = new ufo_1.Alien(unitLayer, 100, 200);
        alien1.animations.play('idle');
        const alien2 = new ufo_1.Alien(unitLayer, 200, 200);
        alien2.animations.play('killed');
        const alien3 = new ufo_1.Alien(unitLayer, 300, 200);
        alien3.animations.play('headshot');
        const alien4 = new ufo_1.Alien(unitLayer, 400, 200);
        alien4.animations.play('falling');
        const alien5 = new ufo_1.Alien(unitLayer, 500, 200);
        alien5.animations.play('headshot2');
        //        } else {
        const jojo1 = new jojo_1.Jojo(unitLayer, 100, 100);
        jojo1.animations.play('idle');
        const jojo2 = new jojo_1.Jojo(unitLayer, 180, 100);
        jojo2.animations.play('shot');
        const jojo3 = new jojo_1.Jojo(unitLayer, 260, 100);
        jojo3.animations.play('walk');
        //       }
    }
    startGame() {
        this.game.state.start('Play');
    }
    shutdown() {
        this.titleText.destroy();
        this.subtitleText.destroy();
        this.startText.destroy();
    }
}
exports.default = Menu;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Play extends Phaser.State {
    constructor() {
        super(...arguments);
        this.debug = false;
    }
    create() {
        if (this.debug) {
            this.game.time.advancedTiming = true;
        }
        this.game.stage.backgroundColor = '#000000';
        const groundLayer = this.game.add.group();
        groundLayer.name = 'Ground';
        const unitLayer = this.game.add.group();
        unitLayer.name = 'Unit';
        const interfaceLayer = this.game.add.group();
        interfaceLayer.name = 'Interface';
        console.log(this.game.rnd.state());
    }
    update() {
    }
    render() {
        if (this.debug) {
            /*
            // TODO: try https://github.com/samme/phaser-plugin-debug-arcade-physics ?
            // this.game.debug.body(this.vehicles.get(1));
            // this.game.debug.bodyInfo(this.vehicles.get(1), 240, 410);
            const game = this.game;
            this.vehicles.all().map(function(vehicle: Vehicle) {
                game.debug.body(vehicle);
            });
            this.buildings.all().map(function(building: Building) {
                game.debug.body(building);
            });
            this.items.all().map(function(item: Item) {
                game.debug.body(item);
            });
            */
            this.game.debug.text("FPS: " + this.game.time.fps + " ", 2, 14, "#00ff00");
        }
    }
}
exports.default = Play;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Preload extends Phaser.State {
    preload() {
        this.loadAudio();
        this.loadTilemap();
        this.loadTileImages();
        this.loadGameImages();
        this.loadUIImages();
    }
    create() {
        this.game.state.start('Menu'); // TODO: shortcuting "Menu" state :)
    }
    loadAudio() {
    }
    loadTilemap() {
    }
    loadTileImages() {
    }
    loadGameImages() {
        this.load.spritesheet('characters', 'assets/sprites/ufo/characters.png', 32, 32);
        this.load.spritesheet('jojo', 'assets/sprites/jojo/jojo.png', 32, 32);
    }
    loadUIImages() {
        this.load.bitmapFont('carrier-command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    }
}
exports.default = Preload;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Jojo extends Phaser.Sprite {
    constructor(group, x, y) {
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
exports.Jojo = Jojo;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Alien extends Phaser.Sprite {
    constructor(group, x, y) {
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
exports.Alien = Alien;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
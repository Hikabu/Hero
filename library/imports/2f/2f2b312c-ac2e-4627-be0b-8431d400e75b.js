"use strict";
cc._RF.push(module, '2f2b3EsrC5GJ74LhDHUAOdb', 'Game');
// Scripts/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlatformSpawner = /** @class */ (function (_super) {
    __extends(PlatformSpawner, _super);
    function PlatformSpawner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.platformPrefab = null;
        _this.specialPlatformPrefab = null;
        _this.background = null;
        _this.player = null;
        _this.scoreLabel = null;
        _this.playerScore = 0;
        _this.lastPlatformX = 0;
        return _this;
    }
    PlatformSpawner.prototype.onLoad = function () {
        this.lastPlatformX = this.background.x;
        this.spawnInitialPlatform();
        this.schedule(this.spawnSpecialPlatform, 4);
        cc.director.getCollisionManager().enabled = true;
    };
    PlatformSpawner.prototype.gainScore = function () {
        this.playerScore += 1;
        this.scoreLabel.string = this.playerScore.toString();
    };
    PlatformSpawner.prototype.gainSpec = function () {
        this.playerScore += 2;
        this.scoreLabel.string = this.playerScore.toString();
    };
    PlatformSpawner.prototype.spawnInitialPlatform = function () {
        this.spawnPlatform();
    };
    PlatformSpawner.prototype.spawnPlatform = function () {
        var newPlatform = cc.instantiate(this.platformPrefab);
        this.node.addChild(newPlatform);
        newPlatform.setPosition(this.getNewPlatformPosition());
    };
    PlatformSpawner.prototype.getNewPlatformPosition = function () {
        var minX = this.lastPlatformX + 200;
        var maxX = this.lastPlatformX + 400;
        var randX = Math.random() * (maxX - minX) + minX;
        this.lastPlatformX = randX;
        var randY = 0;
        return cc.v2(randX, randY);
    };
    PlatformSpawner.prototype.spawnSpecialPlatform = function () {
        var newSpecialPlatform = cc.instantiate(this.specialPlatformPrefab);
        this.node.addChild(newSpecialPlatform);
        var specialX = Math.random() < 0.5 ? 460 : 650;
        var specialY = 0;
        newSpecialPlatform.setPosition(cc.v2(specialX, specialY));
    };
    PlatformSpawner.prototype.onCollisionEnter = function (selfCollider, otherCollider) {
        if (otherCollider.name === 'Platform<BoxCollider>') {
            this.gainScore();
            cc.delayTime(3);
            otherCollider.node.destroy();
        }
        else {
            this.gainSpec();
            cc.delayTime(3);
            otherCollider.node.destroy();
        }
    };
    PlatformSpawner.prototype.start = function () {
    };
    __decorate([
        property(cc.Prefab)
    ], PlatformSpawner.prototype, "platformPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], PlatformSpawner.prototype, "specialPlatformPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], PlatformSpawner.prototype, "background", void 0);
    __decorate([
        property(cc.Node)
    ], PlatformSpawner.prototype, "player", void 0);
    __decorate([
        property(cc.Label)
    ], PlatformSpawner.prototype, "scoreLabel", void 0);
    PlatformSpawner = __decorate([
        ccclass
    ], PlatformSpawner);
    return PlatformSpawner;
}(cc.Component));
exports.default = PlatformSpawner;

cc._RF.pop();
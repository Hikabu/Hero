"use strict";
cc._RF.push(module, '0bec8706BdL1ZgR6P7lS4SM', 'Popup');
// Scripts/Popup.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backgroundMusic = null;
        _this.endPopupNode = null;
        _this.loser = null;
        return _this;
    }
    NewClass.prototype.Show_Popup = function () {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.2;
        cc.tween(this.node)
            .to(0.5, { scale: 1, opacity: 255 }, { easing: 'quarterInOut' })
            .start();
    };
    NewClass.prototype.Hide_Popup = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.5, { scale: 0.2, opacity: 0 }, { easing: 'quarterInOut' })
            .call(function () {
            _this.node.active = false;
        })
            .start();
    };
    NewClass.prototype.Restart_Clicked = function () {
        this.Hide_Popup();
        // cc.director.loadScene('Game');
        cc.game.restart();
    };
    NewClass.prototype.Play_Clicked = function () {
        if (this.backgroundMusic && !this.backgroundMusic.isPlaying) {
            this.backgroundMusic.play();
        }
        this.Hide_Popup();
        cc.director.loadScene('Game');
    };
    NewClass.prototype.End_Popup = function () {
        if (this.endPopupNode) {
            cc.game.end();
            this.loser.play();
        }
    };
    __decorate([
        property(cc.AudioSource)
    ], NewClass.prototype, "backgroundMusic", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "endPopupNode", void 0);
    __decorate([
        property(cc.AudioSource)
    ], NewClass.prototype, "loser", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
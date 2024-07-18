
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0dhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUF3RUM7UUF0RUcsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsMkJBQXFCLEdBQWMsSUFBSSxDQUFDO1FBRXhDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFDNUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDaEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7O0lBNER0QyxDQUFDO0lBMURHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUNELDhDQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsZ0RBQXNCLEdBQXRCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFaEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsOENBQW9CLEdBQXBCO1FBQ0ksSUFBTSxrQkFBa0IsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDakQsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsWUFBWSxFQUFFLGFBQWE7UUFDeEMsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLHVCQUF1QixFQUFFO1lBQ2hELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7YUFFRDtZQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBQ0QsK0JBQUssR0FBTDtJQUVJLENBQUM7SUFyRUw7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDYTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tFQUNvQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDUztJQVZYLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F3RW5DO0lBQUQsc0JBQUM7Q0F4RUQsQUF3RUMsQ0F4RTRDLEVBQUUsQ0FBQyxTQUFTLEdBd0V4RDtrQkF4RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1TcGF3bmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBsYXRmb3JtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgc3BlY2lhbFBsYXRmb3JtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsOyBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYWNrZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcGxheWVyU2NvcmU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBsYXN0UGxhdGZvcm1YOiBudW1iZXIgPSAwO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxhc3RQbGF0Zm9ybVggPSB0aGlzLmJhY2tncm91bmQueDtcbiAgICAgICAgdGhpcy5zcGF3bkluaXRpYWxQbGF0Zm9ybSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc3Bhd25TcGVjaWFsUGxhdGZvcm0sIDQpO1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2FpblNjb3JlKCkge1xuICAgICAgICB0aGlzLnBsYXllclNjb3JlICs9IDE7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgZ2FpblNwZWMoKSB7XG4gICAgICAgIHRoaXMucGxheWVyU2NvcmUgKz0gMjtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHRoaXMucGxheWVyU2NvcmUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgc3Bhd25Jbml0aWFsUGxhdGZvcm0oKSB7XG4gICAgICAgIHRoaXMuc3Bhd25QbGF0Zm9ybSgpO1xuICAgIH1cblxuICAgIHNwYXduUGxhdGZvcm0oKSB7XG4gICAgICAgIGNvbnN0IG5ld1BsYXRmb3JtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wbGF0Zm9ybVByZWZhYik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdQbGF0Zm9ybSk7XG4gICAgICAgIG5ld1BsYXRmb3JtLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3UGxhdGZvcm1Qb3NpdGlvbigpKTtcbiAgICB9XG5cbiAgICBnZXROZXdQbGF0Zm9ybVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBtaW5YID0gdGhpcy5sYXN0UGxhdGZvcm1YICsgMjAwO1xuICAgICAgICBjb25zdCBtYXhYID0gdGhpcy5sYXN0UGxhdGZvcm1YICsgNDAwO1xuICAgICAgICBjb25zdCByYW5kWCA9IE1hdGgucmFuZG9tKCkgKiAobWF4WCAtIG1pblgpICsgbWluWDtcbiAgICAgICAgdGhpcy5sYXN0UGxhdGZvcm1YID0gcmFuZFg7XG4gICAgICAgIGNvbnN0IHJhbmRZID0gMDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgIH1cbiAgICBzcGF3blNwZWNpYWxQbGF0Zm9ybSgpIHtcbiAgICAgICAgY29uc3QgbmV3U3BlY2lhbFBsYXRmb3JtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcGVjaWFsUGxhdGZvcm1QcmVmYWIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3BlY2lhbFBsYXRmb3JtKTtcbiAgICAgICAgY29uc3Qgc3BlY2lhbFggPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gNDYwIDogNjUwO1xuICAgICAgICBjb25zdCBzcGVjaWFsWSA9IDA7XG4gICAgICAgIG5ld1NwZWNpYWxQbGF0Zm9ybS5zZXRQb3NpdGlvbihjYy52MihzcGVjaWFsWCwgc3BlY2lhbFkpKTtcbiAgICB9XG4gICAgb25Db2xsaXNpb25FbnRlcihzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIubmFtZSA9PT0gJ1BsYXRmb3JtPEJveENvbGxpZGVyPicpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FpblNjb3JlKCk7XG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMyk7XG4gICAgICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5nYWluU3BlYygpO1xuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMpO1xuICAgICAgICAgICAgb3RoZXJDb2xsaWRlci5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgXG4gICAgICAgIH1cbn1cblxuXG5cblxuXG5cblxuIl19
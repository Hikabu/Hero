
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Background.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26a75clsMdABqjiGgfGLK4S', 'Background');
// Scripts/Background.ts

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
var BackgroundLooper = /** @class */ (function (_super) {
    __extends(BackgroundLooper, _super);
    function BackgroundLooper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.background1 = null;
        _this.background2 = null;
        _this.background3 = null;
        _this.moveSpeed = 50;
        return _this;
    }
    BackgroundLooper.prototype.start = function () {
        this.background2.x = this.background1.x + this.background1.width;
        this.background2.y = this.background1.y;
        this.background3.x = this.background2.x + this.background2.width;
        this.background3.y = this.background1.y;
    };
    BackgroundLooper.prototype.update = function (dt) {
        var relativeSpeed1 = this.moveSpeed * (this.background1.width / this.background2.width);
        var relativeSpeed2 = this.moveSpeed * (this.background2.width / this.background3.width);
        this.background1.x -= relativeSpeed1 * dt;
        this.background2.x -= this.moveSpeed * dt;
        this.background3.x -= relativeSpeed2 * dt;
        if (this.background1.x <= -this.background1.width) {
            this.background1.x = this.background3.x + this.background3.width;
        }
        if (this.background2.x <= -this.background2.width) {
            this.background2.x = this.background1.x + this.background1.width;
        }
        if (this.background3.x <= -this.background3.width) {
            this.background3.x = this.background2.x + this.background2.width;
        }
    };
    __decorate([
        property(cc.Node)
    ], BackgroundLooper.prototype, "background1", void 0);
    __decorate([
        property(cc.Node)
    ], BackgroundLooper.prototype, "background2", void 0);
    __decorate([
        property(cc.Node)
    ], BackgroundLooper.prototype, "background3", void 0);
    __decorate([
        property
    ], BackgroundLooper.prototype, "moveSpeed", void 0);
    BackgroundLooper = __decorate([
        ccclass
    ], BackgroundLooper);
    return BackgroundLooper;
}(cc.Component));
exports.default = BackgroundLooper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0JhY2tncm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUFrQ0M7UUFoQ0csaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFXLEVBQUUsQ0FBQzs7SUEwQjNCLENBQUM7SUF4QkcsZ0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxpQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFGLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDcEU7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDcEU7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDcEU7SUFDTCxDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNVO0lBRTVCO1FBREMsUUFBUTt1REFDYztJQVJOLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBa0NwQztJQUFELHVCQUFDO0NBbENELEFBa0NDLENBbEM2QyxFQUFFLENBQUMsU0FBUyxHQWtDekQ7a0JBbENvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmRMb29wZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiYWNrZ3JvdW5kMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmFja2dyb3VuZDM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eVxuICAgIG1vdmVTcGVlZDogbnVtYmVyID0gNTA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kMi54ID0gdGhpcy5iYWNrZ3JvdW5kMS54ICsgdGhpcy5iYWNrZ3JvdW5kMS53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kMi55ID0gdGhpcy5iYWNrZ3JvdW5kMS55O1xuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZDMueCA9IHRoaXMuYmFja2dyb3VuZDIueCArIHRoaXMuYmFja2dyb3VuZDIud2lkdGg7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZDMueSA9IHRoaXMuYmFja2dyb3VuZDEueTtcbiAgICB9XG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVTcGVlZDEgPSB0aGlzLm1vdmVTcGVlZCAqICh0aGlzLmJhY2tncm91bmQxLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kMi53aWR0aCk7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlU3BlZWQyID0gdGhpcy5tb3ZlU3BlZWQgKiAodGhpcy5iYWNrZ3JvdW5kMi53aWR0aCAvIHRoaXMuYmFja2dyb3VuZDMud2lkdGgpO1xuXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZDEueCAtPSByZWxhdGl2ZVNwZWVkMSAqIGR0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQyLnggLT0gdGhpcy5tb3ZlU3BlZWQgKiBkdDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kMy54IC09IHJlbGF0aXZlU3BlZWQyICogZHQ7XG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQxLnggPD0gLXRoaXMuYmFja2dyb3VuZDEud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZDEueCA9IHRoaXMuYmFja2dyb3VuZDMueCArIHRoaXMuYmFja2dyb3VuZDMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZDIueCA8PSAtdGhpcy5iYWNrZ3JvdW5kMi53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kMi54ID0gdGhpcy5iYWNrZ3JvdW5kMS54ICsgdGhpcy5iYWNrZ3JvdW5kMS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kMy54IDw9IC10aGlzLmJhY2tncm91bmQzLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQzLnggPSB0aGlzLmJhY2tncm91bmQyLnggKyB0aGlzLmJhY2tncm91bmQyLndpZHRoO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuIl19
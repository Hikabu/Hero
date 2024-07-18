
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Background');
require('./assets/Scripts/Game');
require('./assets/Scripts/Platform');
require('./assets/Scripts/Player');
require('./assets/Scripts/Popup');
require('./assets/Scripts/Stick');
require('./assets/Scripts/sample');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Platform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57381M2QUtPWosJ2alstPrP', 'Platform');
// Scripts/Platform.ts

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
        _this.touchRadius = 0;
        return _this;
    }
    NewClass.prototype.onCollisionEnter = function (selfCollider, otherCollider) {
        // if(otherCollider.name == 'Platform<BoxCollider>')
        {
            //    this.node.parent.getComponent('Platform').spawnPlatform();
            console.log('on collision enter');
            // this.node.destroy();
        }
    };
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) { };
    __decorate([
        property
    ], NewClass.prototype, "touchRadius", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BsYXRmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUJDO1FBcEJHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQW9CNUIsQ0FBQztJQWxCRyxtQ0FBZ0IsR0FBaEIsVUFBaUIsWUFBWSxFQUFFLGFBQWE7UUFDeEMsb0RBQW9EO1FBQ3BEO1lBQ0EsZ0VBQWdFO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyx1QkFBdUI7U0FDMUI7SUFDVCxDQUFDO0lBQ0cseUJBQU0sR0FBTjtRQUNRLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixtQ0FBbUM7UUFDbkMseUNBQXlDO0lBQ2pELENBQUM7SUFDRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQW5CZDtRQURDLFFBQVE7aURBQ2U7SUFIUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUI1QjtJQUFELGVBQUM7Q0F2QkQsQUF1QkMsQ0F2QnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUJqRDtrQkF2Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRvdWNoUmFkaXVzOiBudW1iZXIgPSAwOyBcblxuICAgIG9uQ29sbGlzaW9uRW50ZXIoc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XG4gICAgICAgIC8vIGlmKG90aGVyQ29sbGlkZXIubmFtZSA9PSAnUGxhdGZvcm08Qm94Q29sbGlkZXI+JylcbiAgICAgICAge1xuICAgICAgICAvLyAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnUGxhdGZvcm0nKS5zcGF3blBsYXRmb3JtKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb24gY29sbGlzaW9uIGVudGVyJyk7XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG59XG4gICAgb25Mb2FkKCl7XG4gICAgICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcbiAgICB9ICAgXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Stick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4facQBGdxDWrBAQzB27OAK', 'Stick');
// Scripts/Stick.ts

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
exports.StickGame = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StickGame = /** @class */ (function (_super) {
    __extends(StickGame, _super);
    function StickGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stickSFX = null;
        _this.stickSpriteFrame = null;
        _this.player = null;
        _this.stickNode = null;
        _this.totalStickHeight = 0;
        _this.originalStickHeight = 0;
        return _this;
    }
    StickGame.prototype.onLoad = function () {
        this.stickNode = new cc.Node();
        var stickSprite = this.stickNode.addComponent(cc.Sprite);
        stickSprite.spriteFrame = this.stickSpriteFrame;
        this.stickNode.anchorY = 0;
        this.stickNode.width = 10;
        this.stickNode.height = 0;
        this.originalStickHeight = this.stickNode.height;
        this.node.addChild(this.stickNode);
        this.totalStickHeight = this.stickNode.height;
        var canvas = cc.find('Canvas');
        if (canvas) {
            canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }
    };
    StickGame.prototype.onTouchStart = function (event) {
        this.schedule(this.growStick, 0.000000001); // Grow
    };
    StickGame.prototype.onTouchEnd = function (event) {
        this.unschedule(this.growStick);
        this.fallStick();
    };
    StickGame.prototype.growStick = function () {
        this.totalStickHeight += 30;
        this.stickNode.height = this.totalStickHeight;
    };
    StickGame.prototype.resetStick = function () {
        this.stickNode.destroy();
        this.stickNode = new cc.Node();
        this.onLoad();
    };
    StickGame.prototype.fallStick = function () {
        var _this = this;
        var rotateAction = cc.rotateTo(0.5, 90).easing(cc.easeCubicActionOut()); // Rotate
        this.stickSFX.play();
        var moveAction = cc.sequence(rotateAction, cc.callFunc(function () {
            if (_this.player) {
                var playerComponent = _this.player.getComponent('Player');
                if (playerComponent) {
                    playerComponent.walkOnStick(_this.stickNode, _this.totalStickHeight);
                }
            }
        }), cc.delayTime(1.2), cc.callFunc(function () {
            _this.resetStick();
        }));
        this.stickNode.runAction(moveAction);
    };
    __decorate([
        property(cc.AudioSource)
    ], StickGame.prototype, "stickSFX", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], StickGame.prototype, "stickSpriteFrame", void 0);
    __decorate([
        property(cc.Node)
    ], StickGame.prototype, "player", void 0);
    StickGame = __decorate([
        ccclass
    ], StickGame);
    return StickGame;
}(cc.Component));
exports.StickGame = StickGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1N0aWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQXVFQztRQXBFRyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxzQkFBZ0IsR0FBbUIsSUFBSSxDQUFDO1FBR3hDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFZixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHNCQUFnQixHQUFXLENBQUMsQ0FBQztRQUM3Qix5QkFBbUIsR0FBVyxDQUFDLENBQUM7O0lBMEQ1QyxDQUFDO0lBeERHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUVoRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pFO0lBQ0wsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87SUFDdkQsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxLQUFlO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2xELENBQUM7SUFDRCw4QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsNkJBQVMsR0FBVDtRQUFBLGlCQW1CQztRQWxCRyxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUMxQixZQUFZLEVBQ1osRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFNLGVBQWUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxlQUFlLEVBQUU7b0JBQ2pCLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDdEU7YUFDSjtRQUNMLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNlO0lBR3hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFUZCxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBdUVyQjtJQUFELGdCQUFDO0NBdkVELEFBdUVDLENBdkU4QixFQUFFLENBQUMsU0FBUyxHQXVFMUM7QUF2RVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBTdGlja0dhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIHN0aWNrU0ZYOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3RpY2tTcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RpY2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIHRvdGFsU3RpY2tIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBvcmlnaW5hbFN0aWNrSGVpZ2h0OiBudW1iZXIgPSAwOyBcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zdGlja05vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBjb25zdCBzdGlja1Nwcml0ZSA9IHRoaXMuc3RpY2tOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBzdGlja1Nwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3RpY2tTcHJpdGVGcmFtZTtcblxuICAgICAgICB0aGlzLnN0aWNrTm9kZS5hbmNob3JZID0gMDtcbiAgICAgICAgdGhpcy5zdGlja05vZGUud2lkdGggPSAxMDtcbiAgICAgICAgdGhpcy5zdGlja05vZGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0aWNrSGVpZ2h0ID0gdGhpcy5zdGlja05vZGUuaGVpZ2h0O1xuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zdGlja05vZGUpO1xuICAgICAgICB0aGlzLnRvdGFsU3RpY2tIZWlnaHQgPSB0aGlzLnN0aWNrTm9kZS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5ncm93U3RpY2ssIDAuMDAwMDAwMDAxKTsgLy8gR3Jvd1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLlRvdWNoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdyb3dTdGljayk7XG4gICAgICAgIHRoaXMuZmFsbFN0aWNrKCk7XG4gICAgfVxuXG4gICAgZ3Jvd1N0aWNrKCkge1xuICAgICAgICB0aGlzLnRvdGFsU3RpY2tIZWlnaHQgKz0gMzA7XG4gICAgICAgIHRoaXMuc3RpY2tOb2RlLmhlaWdodCA9IHRoaXMudG90YWxTdGlja0hlaWdodDtcbiAgICB9XG4gICAgcmVzZXRTdGljaygpIHtcbiAgICAgICAgdGhpcy5zdGlja05vZGUuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnN0aWNrTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfVxuICAgIGZhbGxTdGljaygpIHtcbiAgICAgICAgY29uc3Qgcm90YXRlQWN0aW9uID0gY2Mucm90YXRlVG8oMC41LCA5MCkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTsgLy8gUm90YXRlXG4gICAgICAgIHRoaXMuc3RpY2tTRlgucGxheSgpO1xuICAgICAgICBjb25zdCBtb3ZlQWN0aW9uID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICByb3RhdGVBY3Rpb24sXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckNvbXBvbmVudCA9IHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckNvbXBvbmVudC53YWxrT25TdGljayh0aGlzLnN0aWNrTm9kZSwgdGhpcy50b3RhbFN0aWNrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMiksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFN0aWNrKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnN0aWNrTm9kZS5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4gICAgfVxufVxuXG5cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0658Yzf3NCMrqwTnLGARRx', 'Player');
// Scripts/Player.ts

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
exports.Player = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.endPopupNode = null;
        _this.loser = null;
        _this.idleTimer = 0;
        _this.isOnPlatform = false;
        return _this;
    }
    Player.prototype.walkOnStick = function (stickNode, totalStickHeight) {
        var _this = this;
        var stickWorldPos = stickNode.parent.convertToWorldSpaceAR(stickNode.position);
        var targetX = stickWorldPos.x + totalStickHeight;
        var targetY = 288;
        var newX = targetX - totalStickHeight / 1.06;
        var targetPosition = this.node.parent.convertToNodeSpaceAR(cc.v2(newX, targetY));
        var moveAction = cc.sequence(cc.moveTo(1, targetPosition).easing(cc.easeCubicActionOut()), cc.callFunc(function () {
            _this.idleTimer = 0.2;
        }), cc.delayTime(1), cc.callFunc(function () {
            if (!_this.isOnPlatform) {
                _this.node.setPosition(cc.v2(128, 0));
                _this.endPopupNode.active = true;
            }
            else
                _this.node.runAction(cc.moveTo(1, cc.v2(128, 288)).easing(cc.easeCubicActionOut()));
        }));
        this.node.runAction(moveAction);
    };
    Player.prototype.End_Popup = function () {
        if (this.endPopupNode.active = true) {
            cc.game.end();
            this.loser.play();
        }
    };
    Player.prototype.onCollisionEnter = function (other, self) {
        if (other.node.name === 'Platform') {
            this.isOnPlatform = true;
        }
    };
    Player.prototype.onCollisionExit = function (other, self) {
        if (other.node.name === 'Platform') {
            this.isOnPlatform = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "endPopupNode", void 0);
    __decorate([
        property(cc.AudioSource)
    ], Player.prototype, "loser", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.Player = Player;
/*to backup*/
// const { ccclass, property } = cc._decorator;
// @ccclass
// export class Player extends cc.Component {
//     private idleTimer: number = 0;
//     private isOnPlatform: boolean = false;
//     walkOnStick(stickNode: cc.Node, totalStickHeight: number) {
//         const stickWorldPos = stickNode.parent.convertToWorldSpaceAR(stickNode.position);
//         const targetX = stickWorldPos.x + totalStickHeight;
//         const targetY = 288;
//         const newX = targetX - totalStickHeight / 1.06;
//         const targetPosition = this.node.parent.convertToNodeSpaceAR(cc.v2(newX, targetY));
//         const moveAction = cc.sequence(
//             cc.moveTo(1, targetPosition).easing(cc.easeCubicActionOut()),
//             cc.callFunc(() => {
//                 this.idleTimer = 0;
//             }),
//             cc.delayTime(1),
//             cc.callFunc(() => {
//                 if (!this.isOnPlatform) {
//                     this.node.setPosition(cc.v2(128, 0));
//                 }
//             })
//         );
//         this.node.runAction(moveAction);
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEIsMEJBQVk7SUFBeEM7UUFBQSxxRUFrREM7UUFoREcsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUEwQzFDLENBQUM7SUF4Q0csNEJBQVcsR0FBWCxVQUFZLFNBQWtCLEVBQUUsZ0JBQXdCO1FBQXhELGlCQXVCQztRQXRCRyxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRixJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixDQUFDO1FBQ25ELElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFNLElBQUksR0FBRyxPQUFPLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQy9DLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFbkYsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FDMUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQzVELEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDLENBQUMsRUFDRixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEIsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ25DOztnQkFFRyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0YsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUM7WUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBQ0QsaUNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDbEQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUc7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBQ0QsZ0NBQWUsR0FBZixVQUFnQixLQUFrQixFQUFFLElBQWlCO1FBQ2pELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQS9DRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7eUNBQ0k7SUFMcEIsTUFBTTtRQURsQixPQUFPO09BQ0ssTUFBTSxDQWtEbEI7SUFBRCxhQUFDO0NBbERELEFBa0RDLENBbEQyQixFQUFFLENBQUMsU0FBUyxHQWtEdkM7QUFsRFksd0JBQU07QUFvRG5CLGFBQWE7QUFDYiwrQ0FBK0M7QUFFL0MsV0FBVztBQUNYLDZDQUE2QztBQUM3QyxxQ0FBcUM7QUFDckMsNkNBQTZDO0FBRTdDLGtFQUFrRTtBQUNsRSw0RkFBNEY7QUFDNUYsOERBQThEO0FBQzlELCtCQUErQjtBQUMvQiwwREFBMEQ7QUFDMUQsOEZBQThGO0FBRTlGLDBDQUEwQztBQUMxQyw0RUFBNEU7QUFDNUUsa0NBQWtDO0FBQ2xDLHNDQUFzQztBQUN0QyxrQkFBa0I7QUFDbEIsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQyw0Q0FBNEM7QUFDNUMsNERBQTREO0FBQzVELG9CQUFvQjtBQUNwQixpQkFBaUI7QUFDakIsYUFBYTtBQUViLDJDQUEyQztBQUMzQyxRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlbmRQb3B1cE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGxvc2VyOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG4gICAgXG4gICAgcHJpdmF0ZSBpZGxlVGltZXI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBpc09uUGxhdGZvcm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHdhbGtPblN0aWNrKHN0aWNrTm9kZTogY2MuTm9kZSwgdG90YWxTdGlja0hlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHN0aWNrV29ybGRQb3MgPSBzdGlja05vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihzdGlja05vZGUucG9zaXRpb24pO1xuICAgICAgICBjb25zdCB0YXJnZXRYID0gc3RpY2tXb3JsZFBvcy54ICsgdG90YWxTdGlja0hlaWdodDtcbiAgICAgICAgY29uc3QgdGFyZ2V0WSA9IDI4ODtcbiAgICAgICAgY29uc3QgbmV3WCA9IHRhcmdldFggLSB0b3RhbFN0aWNrSGVpZ2h0IC8gMS4wNjtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKG5ld1gsIHRhcmdldFkpKTtcblxuICAgICAgICBjb25zdCBtb3ZlQWN0aW9uID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMSwgdGFyZ2V0UG9zaXRpb24pLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlVGltZXIgPSAwLjI7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPblBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52MigxMjgsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRQb3B1cE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMSwgY2MudjIoMTI4LCAyODgpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4gICAgfVxuICAgIEVuZF9Qb3B1cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kUG9wdXBOb2RlLmFjdGl2ZSA9IHRydWUpe1xuICAgICAgICAgICAgY2MuZ2FtZS5lbmQoKTtcbiAgICAgICAgICAgIHRoaXMubG9zZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09PSAnUGxhdGZvcm0nICkge1xuICAgICAgICAgICAgdGhpcy5pc09uUGxhdGZvcm0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ29sbGlzaW9uRXhpdChvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT09ICdQbGF0Zm9ybScpIHtcbiAgICAgICAgICAgIHRoaXMuaXNPblBsYXRmb3JtID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qdG8gYmFja3VwKi9cbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIEBjY2NsYXNzXG4vLyBleHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbi8vICAgICBwcml2YXRlIGlkbGVUaW1lcjogbnVtYmVyID0gMDtcbi8vICAgICBwcml2YXRlIGlzT25QbGF0Zm9ybTogYm9vbGVhbiA9IGZhbHNlO1xuXG4vLyAgICAgd2Fsa09uU3RpY2soc3RpY2tOb2RlOiBjYy5Ob2RlLCB0b3RhbFN0aWNrSGVpZ2h0OiBudW1iZXIpIHtcbi8vICAgICAgICAgY29uc3Qgc3RpY2tXb3JsZFBvcyA9IHN0aWNrTm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHN0aWNrTm9kZS5wb3NpdGlvbik7XG4vLyAgICAgICAgIGNvbnN0IHRhcmdldFggPSBzdGlja1dvcmxkUG9zLnggKyB0b3RhbFN0aWNrSGVpZ2h0O1xuLy8gICAgICAgICBjb25zdCB0YXJnZXRZID0gMjg4O1xuLy8gICAgICAgICBjb25zdCBuZXdYID0gdGFyZ2V0WCAtIHRvdGFsU3RpY2tIZWlnaHQgLyAxLjA2O1xuLy8gICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIobmV3WCwgdGFyZ2V0WSkpO1xuXG4vLyAgICAgICAgIGNvbnN0IG1vdmVBY3Rpb24gPSBjYy5zZXF1ZW5jZShcbi8vICAgICAgICAgICAgIGNjLm1vdmVUbygxLCB0YXJnZXRQb3NpdGlvbikuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKSxcbi8vICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmlkbGVUaW1lciA9IDA7XG4vLyAgICAgICAgICAgICB9KSxcbi8vICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbi8vICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPblBsYXRmb3JtKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52MigxMjgsIDApKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICApO1xuXG4vLyAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obW92ZUFjdGlvbik7XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/sample.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6a48kuUgFKSY2Qhy4JHK1Y', 'sample');
// Scripts/sample.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3NhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Popup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0NDO1FBNUNHLHFCQUFlLEdBQW1CLElBQUksQ0FBQztRQUV2QyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQW1CLElBQUksQ0FBQzs7SUF3Q2pDLENBQUM7SUFyQ0csNkJBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLENBQUM7YUFDM0QsS0FBSyxFQUFFLENBQUM7SUFFYixDQUFDO0lBQ0QsNkJBQVUsR0FBVjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2xCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsQ0FBQzthQUMzRCxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsa0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixpQ0FBaUM7UUFDakMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDZCxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUEzQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0k7SUFQWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK0M1QjtJQUFELGVBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBK0NqRDtrQkEvQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGJhY2tncm91bmRNdXNpYzogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVuZFBvcHVwTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGxvc2VyOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG4gICAgcHJvcGV0cmllczoge1xuICAgIH1cbiAgICBTaG93X1BvcHVwKCl7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuMjtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKSBcbiAgICAgICAgLnRvKDAuNSwge3NjYWxlOiAxLCBvcGFjaXR5OiAyNTV9LCB7ZWFzaW5nOiAncXVhcnRlckluT3V0J30pXG4gICAgICAgIC5zdGFydCgpO1xuICAgICAgICBcbiAgICB9XG4gICAgSGlkZV9Qb3B1cCgpe1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgIC50bygwLjUsIHtzY2FsZTogMC4yLCBvcGFjaXR5OiAwfSwge2Vhc2luZzogJ3F1YXJ0ZXJJbk91dCd9KVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdGFydCgpO1xuICAgIH1cbiAgICBSZXN0YXJ0X0NsaWNrZWQoKXtcbiAgICAgICAgdGhpcy5IaWRlX1BvcHVwKCk7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICBjYy5nYW1lLnJlc3RhcnQoKTtcbiAgICB9XG5cbiAgICBQbGF5X0NsaWNrZWQoKXtcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZE11c2ljICYmICF0aGlzLmJhY2tncm91bmRNdXNpYy5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkhpZGVfUG9wdXAoKTtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgIH1cblxuICAgIEVuZF9Qb3B1cCgpe1xuICAgICAgICBpZiAodGhpcy5lbmRQb3B1cE5vZGUpIHtcbiAgICAgICAgICAgIGNjLmdhbWUuZW5kKCk7XG4gICAgICAgICAgICB0aGlzLmxvc2VyLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

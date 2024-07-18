
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
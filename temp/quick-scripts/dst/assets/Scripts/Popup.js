
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
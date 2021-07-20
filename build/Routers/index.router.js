"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
var express_1 = require("express");
var index_controller_1 = require("../Controllers/index.controller");
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
        this.app = express_1.Router();
        this.configRoutes();
    }
    IndexRouter.getInstance = function () {
        return !IndexRouter.instance ? new IndexRouter : IndexRouter.instance;
    };
    IndexRouter.prototype.configRoutes = function () {
        this.app.get('/', index_controller_1.indexController.getData);
    };
    return IndexRouter;
}());
exports.indexRouter = IndexRouter.getInstance().app;

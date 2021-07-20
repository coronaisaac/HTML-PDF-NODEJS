"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var index_router_1 = require("./Routers/index.router");
var Server = /** @class */ (function () {
    function Server() {
        this.PORT = 3200;
        this.app = express_1.default();
        this.config();
    }
    Server.getInstance = function () {
        return !Server.instance ? new Server() : Server.instance;
    };
    Server.prototype.config = function () {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default('dev'));
        this.routes();
    };
    Server.prototype.routes = function () {
        this.app.use('/', index_router_1.indexRouter);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.PORT, function () {
            console.log("SERVER RUN ON PORT " + _this.PORT);
        });
    };
    return Server;
}());
Server.getInstance().start();

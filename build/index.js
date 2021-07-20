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
        this.app.listen(3200, function () {
            console.log('server run on port 3200');
        });
    };
    return Server;
}());
Server.getInstance().start();

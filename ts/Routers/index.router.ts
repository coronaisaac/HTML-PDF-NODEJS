import {Router} from 'express'
import {indexController} from '../Controllers/index.controller';
class IndexRouter{
    private static instance:IndexRouter;
    public app:Router;
    public static getInstance():IndexRouter{
        return !IndexRouter.instance ? new IndexRouter : IndexRouter.instance;
    }
    constructor(){
        this.app=Router();
        this.configRoutes();
    }
    private configRoutes(){
        this.app.get('/',indexController.getData);
    }
}
export const indexRouter = IndexRouter.getInstance().app;
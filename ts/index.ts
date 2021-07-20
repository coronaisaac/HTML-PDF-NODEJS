import express, { Application} from 'express';
import morgan from 'morgan';
import { indexRouter } from './Routers/index.router';

class Server{
    private static instance:Server;
    public app:Application;
    private PORT:number =3200;
    public static getInstance():Server{
        return !Server.instance ? new Server() : Server.instance;
    }
    constructor(){
        this.app=express();
        this.config();
    }
    private config(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(morgan('dev'));
        this.routes();
    }
    private routes():void{
        this.app.use('/',indexRouter);
    }
    start():void{
        this.app.listen(this.PORT,()=>{
            console.log(`SERVER RUN ON PORT ${this.PORT}`);
        });
    }
}
Server.getInstance().start();


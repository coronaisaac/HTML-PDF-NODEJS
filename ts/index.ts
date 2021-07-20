import express, { Application,Request,Response } from 'express';
import morgan from 'morgan';
import { indexRouter } from './Routers/index.router';

class Server{
    private static instance:Server;
    public app:Application;
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
        this.app.listen(3200,()=>{
            console.log('server run on port 3200');
        })
    }
}
Server.getInstance().start();


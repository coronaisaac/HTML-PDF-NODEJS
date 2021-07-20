import {Request,Response} from 'express'
import { indexHelper} from '../Helpers/index.helper';

import fs from 'fs';
import pdf from 'html-pdf';

const tmpl = fs.readFileSync(require.resolve('../../Template/template.html' ),'utf-8');

class IndexController{
    private static instance:IndexController;
    public static getInstance():IndexController{
        return !IndexController.instance ? new IndexController : IndexController.instance;
    }
    public async  getData(req:Request,res:Response){
       const getUser = indexHelper.getPerson();  
       const html = tmpl.replace('{{date}}',new Date().toUTCString());
       let templateTable:string='';
       getUser.forEach(persona => {
            templateTable+=`<tr><td>${persona.id}</td><td>${persona.nombre}</td><td>${persona.app}</td><td>${persona.cargo}</td><td>${persona.sueldo}</td></tr>`
       });
      try {  
        await pdf.create(html.replace('<nodejs></nodejs>',templateTable),{format:'Letter',header: {height:"150px"}}).toStream((err,stream)=>{
            if(err) return res.send(err.stack);
            res.setHeader('Content-type', 'application/pdf');
            stream.pipe(res);
        });
             
      } catch (error) {
          res.send(error)
      }        
    }
    
    
}
export const indexController = IndexController.getInstance();
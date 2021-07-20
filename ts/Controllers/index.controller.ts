import {Request,Response} from 'express'
import { indexHelper} from '../Helpers/index.helper';

import fs from 'fs';
import pdf from 'html-pdf';
import { Persona } from '../models/persona.model';

const getTemplateHTML = fs.readFileSync(require.resolve('../../Template/template.html' ),'utf-8');

class IndexController{
    private static instance:IndexController;
    
    
    public static getInstance():IndexController{
        return !IndexController.instance ? new IndexController : IndexController.instance;
    }

    public async  getData(req:Request,res:Response){
        
        try {  
        const getUser:Persona[] = indexHelper.getPersonas();  
        const templateTable:string = indexHelper.structureHTML(getUser);
        const html:string = getTemplateHTML.replace('{{date}}',new Date().toUTCString());

        await pdf.create(html.replace('<nodejs></nodejs>',templateTable),{format:'Letter',header: {height:"150px"}}).toStream((err,stream)=>{
            if(err) return res.send(err.stack);
            res.setHeader('Content-type', 'application/pdf');
            return stream.pipe(res);
        });
             
      } catch (error) {
          return res.status(500).json({
              status:false,
              message:error
          })
      }        
    }
    
    
}
export const indexController = IndexController.getInstance();
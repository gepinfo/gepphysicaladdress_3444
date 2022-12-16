import { Request, Response } from 'express';
import {addresslocationDao} from '../dao/addresslocationDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let addresslocation = new addresslocationDao();

export class addresslocationService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpDelete')
     let  addresslocationId = req.params.id;
     addresslocation.GpDelete(addresslocationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpSearch')
     let  addresslocationData = req.query;
     addresslocation.GpSearch(addresslocationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpSearchForUpdate')
     let  addresslocationData = req.body;
     addresslocation.GpSearchForUpdate(addresslocationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpUpdate')
     let  addresslocationData = req.body;
     addresslocation.GpUpdate(addresslocationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpGetNounById')
     let  addresslocationId = req.params.id;
     addresslocation.GpGetNounById(addresslocationId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpGetAllValues')
     
     addresslocation.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpCreate')
     let  addresslocationData = req.body;
     addresslocation.GpCreate(addresslocationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into addresslocationService.ts: GpGetNounCreatedBy')
     let  addresslocationData = { created_by: req.query.createdby };
     addresslocation.GpGetNounCreatedBy(addresslocationData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from addresslocationService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}
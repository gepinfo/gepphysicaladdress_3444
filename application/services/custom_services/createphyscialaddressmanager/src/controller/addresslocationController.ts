import { Request, Response } from 'express';
import { addresslocationService } from '../service/addresslocationService';
import { CustomLogger } from '../config/Logger'
let addresslocation = new addresslocationService();

export class addresslocationController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    addresslocation.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into addresslocationController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from addresslocationController.ts: GpGetNounCreatedBy');
    })}


}
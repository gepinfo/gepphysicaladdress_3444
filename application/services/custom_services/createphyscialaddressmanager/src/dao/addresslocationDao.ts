import * as mongoose from 'mongoose';
import addresslocationModel from '../models/daomodels/addresslocation';
import { CustomLogger } from '../config/Logger'


export class addresslocationDao {
    private addresslocation = addresslocationModel;
    constructor() { }
    
    public async GpDelete(addresslocationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpDelete');

    

    
    
    
    this.addresslocation.findByIdAndRemove(addresslocationId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(addresslocationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(addresslocationData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.addresslocation.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(addresslocationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpSearchForUpdate');

    

    
    
    
    this.addresslocation.findOneAndUpdate({ _id: addresslocationData._id }, addresslocationData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(addresslocationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpUpdate');

    

    
    
    
    this.addresslocation.findOneAndUpdate({ _id: addresslocationData._id }, addresslocationData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(addresslocationId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpGetNounById');

    

    
    
    
    this.addresslocation.findById(addresslocationId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpGetAllValues');

    

    
    
    
    this.addresslocation.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(addresslocationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpCreate');

    let temp = new addresslocationModel(addresslocationData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(addresslocationData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into addresslocationDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.addresslocation.aggregate(([
                        { $match: { $and: [{ created_by: addresslocationData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from addresslocationDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}
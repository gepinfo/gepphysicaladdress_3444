
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const addresslocationSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   latitude: Number,
   longtitude: Number,
   countrycode: String,
   geonameid: String
})

const addresslocationModel = mongoose.model('addresslocation', addresslocationSchema, 'addresslocation');
export default addresslocationModel;

import { Request, Response, NextFunction } from "express";
import { addresslocationController } from '../controller/addresslocationController';


export class Routes {
    private addresslocation: addresslocationController = new addresslocationController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/addresslocation/:id').delete(this.addresslocation.GpDelete);
app.route('/addresslocation/get/search').get(this.addresslocation.GpSearch);
app.route('/addresslocation/get/update').put(this.addresslocation.GpSearchForUpdate);
app.route('/addresslocation').put(this.addresslocation.GpUpdate);
app.route('/addresslocation/:id').get(this.addresslocation.GpGetNounById);
app.route('/addresslocation').get(this.addresslocation.GpGetAllValues);
app.route('/addresslocation').post(this.addresslocation.GpCreate);
app.route('/addresslocation/userid/created_by').get(this.addresslocation.GpGetNounCreatedBy);
     }

}
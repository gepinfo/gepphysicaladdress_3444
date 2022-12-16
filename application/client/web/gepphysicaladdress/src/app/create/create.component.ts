import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'countrycode', field: 'countrycode'  },{ headerName: 'geonameid', field: 'geonameid'  },{ headerName: 'latitude', field: 'latitude'  },{ headerName: 'longtitude', field: 'longtitude'  },];
    public addresslocation:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        latitude: '',
        longtitude: '',
        countrycode: '',
        geonameid: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private createService: CreateService,
    ) { }

    ngOnInit() {
        this.addresslocation.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createService.GpCreate(this.addresslocation).subscribe((data:any) => {
            this.addresslocation.name = ''
 	 	this.addresslocation.latitude = ''
 	 	this.addresslocation.longtitude = ''
 	 	this.addresslocation.countrycode = ''
 	 	this.addresslocation.geonameid = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}
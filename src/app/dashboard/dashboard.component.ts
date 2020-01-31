import { Component, ViewChild, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CommonServiceService } from '../../app/service/common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'app';
  private gridApi;
  private gridColumnApi;
  columnDefs=[];
  defaultColDef={};
  // columnDefs = [
  //   { headerName: 'Make', field: 'make', sortable: true, filter: true },
  //   { headerName: 'Model', field: 'model', sortable: true, filter: true },
  //   { headerName: 'Price', field: 'price', sortable: true, filter: true }
  // ];

  

  rowData: any;

  constructor(private http: HttpClient, private commonService: CommonServiceService) {
    this.columnDefs = [
      {
        headerName: "Participant",
        children: [
          {
            field: "athlete",
            width: 150
          },
          {
            field: "age",
            width: 90
          }
        ]
      },
      {
        headerName: "Details",
        children: [
          {
            field: "country",
            width: 120
          },
          {
            field: "year",
            width: 90
          },
          {
            field: "date",
            width: 110
          },
          {
            field: "sport",
            width: 110
          }
        ]
      },
      {
        headerName: "Medals",
        children: [
          {
            field: "gold",
            width: 100
          },
          {
            field: "silver",
            width: 100
          },
          {
            field: "bronze",
            width: 100
          },
          {
            field: "total",
            width: 100
          }
        ]
      }
    ];
    this.defaultColDef = { resizable: true };

  }
  ngOnInit() {
    this.commonService.showHideLoader('block');
    this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json').subscribe(
      data=> {
        this.commonService.showHideLoader('none');
        console.log(data);
        this.rowData = data;
      }
    );
  }

  createRowData() {
    //https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json
    //https://api.myjson.com/bins/15psn9
    this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json').subscribe(
      data=> {
        this.commonService.showHideLoader('none');
        console.log(data);
        this.rowData = data;
      }
    );
  }

  updateRowData() {
    console.log('Enter updateRowData');
    var itemsToUpdate = [];
    this.gridApi.forEachNode(function(rowNode) {
      console.log("rowNode:: ", rowNode);
      var data = rowNode.data;
      if(data.athlete==="Michael Phelps") {
        data.bronze = 9;
      }
      //data.athlete = data.make+"--"+rowNode.__objectId;
      itemsToUpdate.push(data);
    });
    this.gridApi.updateRowData({ update: itemsToUpdate });
  }

  onGridReady(params) {
    console.log('onGridReady: ', params);
    alert('Your Data Refreshed !!');
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.createRowData();
    //params.api.setRowData(globalRowData);
  }

}

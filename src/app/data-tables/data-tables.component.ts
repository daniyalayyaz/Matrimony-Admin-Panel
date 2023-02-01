import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
// import { DatatableData } from './data/datatables.data';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs"
@Component({
  selector: 'app-datatables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss', '../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataTablesComponent implements OnInit {

  users:any;
  // public
  public contentHeader: object;
  DatatableData:any={}
  // row data
  public rows = this.DatatableData;

  // column header
  public columns = [
    { name: 'email', prop: 'email' },
    

    { name: 'Age', prop: 'age' },
    { name: 'Salary', prop: 'salary' },

  ];

  // For basic table

  columnsForBasic = ['Name','Email','Gender','Age','Personal Contact','Parent Contact','Facebook','Instagram',
'Twitter','Profile Created','Religious','Other Religion','Sect','Caste','Religious Status','Clan','Mother Tongue','Looks',
'Complexion','Height','Build','Hobbies','Country','Province','City','House','Nationality','Future Plans','Professional',
'Job Status','Workplace','Specialties','Qualification','Another Qualification','Institution','Income','Professional Info',
'Father Occuption','Mother Occuption','Sisters','Brothers','Social Economic','Family Info',"Verification",
"Action"
]

  // multi Purpose datatable Row data
  public multiPurposeRows = this.DatatableData;

  public ColumnMode = ColumnMode;

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  @ViewChild('tableResponsive') tableResponsive: any;


  public expanded: any = {};

  public editing = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;

  // server side row data
  public serverSideRowData;

  // private
  private tempData = [];
  private multiPurposeTemp = [];

  /**
   * inlineEditingUpdate
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdate(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * filterUpdate
   *
   * @param code
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * toggleExpandRowResponsive
   *
   * @param row
   */
  toggleExpandRowResponsive(row) {
    this.tableResponsive.rowDetail.toggleExpandRow(row);
  }

  /**
   * customChkboxOnSelect
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  /**
   * serverSideSetPage
   *
   * @param event
   */
  serverSideSetPage(event) {
    this.http
      .get('https://mvp.herokuapp.com/api/admin/getallusers')
      .pipe(map((data) => data as Array<any>))
      .subscribe((data) => {
        this.serverSideRowData = data;
      });
  }

  /**
   * MultiPurposeFilterUpdate
   *
   * @param event
   */
  MultiPurposeFilterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.multiPurposeTemp.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.multiPurposeRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  getAllUsers(){
    this.http.get("https://mvp.herokuapp.com/api/admin/getallusers").subscribe((result)=>{
  
      this.users=result
    });
      // let user = this.http.get("https://mvp.herokuapp.com/api/admin/getallusers");
      // return this.http.get("https://baltiapi.herokuapp.com/users");
    }

    deleteUser(id:any){
      this.http.get(`https://mvp.herokuapp.com/api/admin/deleteuser/${id}`).subscribe((result)=>{
  
        console.log(result)
      });
      this.getAllUsers();
    }

  
  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {
    this.tempData = this.DatatableData;
    this.multiPurposeTemp = this.DatatableData;
    this.getAllUsers();

    
  }

  //Fetching Data
  
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // Initially load first page
    this.serverSideSetPage({ offset: 0 });

    // content header
    this.contentHeader = {
      headerTitle: 'Datatables',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '#'
          },
          {
            name: 'Forms & Tables',
            isLink: true,
            link: ''
          },
          {
            name: 'Datatables',
            isLink: false
          }
        ]
      }
    };

  }
}

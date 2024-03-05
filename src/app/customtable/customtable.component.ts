import { Component } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-customtable',
  templateUrl: './customtable.component.html',
  styleUrls: ['./customtable.component.css']
})
export class CustomtableComponent {

  constructor(private _getdataservice: GetdataService){

  }

  ngOnIt(){
    debugger;
    this._getdataservice.getmoviesdata().subscribe((data)=>{console.log(data)})
  }

}

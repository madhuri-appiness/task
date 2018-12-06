import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
keywordsArr:any;
searchkey:any;
serachedResult:any;
keyArr:any=[];
arrlist:any;
arr:any;
  constructor(private http:HttpService) { }

  ngOnInit() {
   
  }
  resultfound:boolean = false;
  
  searchResult(){
    localStorage.setItem('keyword',this.searchkey)
    this.keyArr.push(localStorage.getItem('keyword'));
  
   this.arr =  this.keyArr.filter((key,index)=>{
    return this.keyArr[key] != index;
    })
    console.log(this.arr);
   

  if(this.searchkey){
    this.http.getkeyword(this.searchkey).subscribe((res:any)=>{
      this.resultfound = true;
      this.arrlist = res.total;
      this.keywordsArr = res.keywords.suggested_keywords;

    })
  }
  }
}

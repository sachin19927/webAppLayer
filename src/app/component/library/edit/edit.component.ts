import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, QueryParamsHandling } from '@angular/router';
import { ENDPOINTS } from '@app/endpoints';
import { Book } from 'src/app/entity/book';
import { LibraryServiceService } from 'src/app/service/library-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  book!: Book;
  allwedTo =false;
  fragmentValue='';

  constructor(private libraryService: LibraryServiceService, private route: ActivatedRoute) { }


  ngOnInit(): void {
  //  console.log(this.route.snapshot.queryParams)
   this.libraryService.getById(ENDPOINTS.LIBRARY_DATA,this.route.snapshot.params['id']).subscribe(book=>this.book=book);
   this.route.params.subscribe((params:Params)=>{
    this.libraryService.getById(ENDPOINTS.LIBRARY_DATA,params['id']).subscribe(book=>this.book=book);
    this.allwedTo=params['allwedTo'];

   })
   this.route.queryParams.subscribe((params:Params)=>{
    this.allwedTo=params['allwedTo'];
   })
   fragmentValue:this.route.fragment.subscribe();
   //console.log(this.route.fragment.subscribe());

  }

}

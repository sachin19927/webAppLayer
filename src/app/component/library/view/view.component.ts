import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ENDPOINTS } from '@app/endpoints';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/entity/book';
import { LibraryServiceService } from 'src/app/service/library-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit,OnDestroy {

  book!: Book;
  paramSubscrption!: Subscription;

  constructor(private libraryService: LibraryServiceService, private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {
   this.libraryService.getById(ENDPOINTS.LIBRARY_DATA,this.route.snapshot.params['id']).subscribe(book=>this.book=book);
   this.paramSubscrption =this.route.params.subscribe((params:Params)=>{
    this.libraryService.getById(ENDPOINTS.LIBRARY_DATA,params['id']).subscribe(book=>this.book=book);
   })
  }

onEdit()
{
  this.router.navigate(['edit'],{relativeTo:this.route,queryParamsHandling:'preserve'})
}

  ngOnDestroy(): void {
    this.paramSubscrption.unsubscribe();
    // even throw component got closed and recreated and visting componenet subscripton won't go
    // By default Angular handles destory of subcription
    // If u want implement only for subscrption parts
  }
}

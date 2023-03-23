import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigatePageTo(path:string)
  {
     this.router.navigate([path]);// absoulte path
   // this.router.navigate([path],{relativeTo: this.route});// relative path use Activated Router
  }

}

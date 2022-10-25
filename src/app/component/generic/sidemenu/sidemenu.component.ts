import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Output() sideNavClosed = new EventEmitter();

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  onAbout() {
    this.router.navigateByUrl('/about');
    this.sideNavClosed.emit(); // Emit event to parent component so it can tell sidenav to close
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {

  public reportedError!: boolean;
  public errorPercentage = 0;
  public timer: string | number | NodeJS.Timer | undefined;
  constructor() { }
  ngOnInit() {
  }
  public checkChanged = (event: { checked: boolean; }) => {
    this.reportedError = event.checked;
    this.reportedError ? this.startTimer() : this.stopTimer();
  }
  private startTimer = () => {
    this.timer = setInterval(() => {
      this.errorPercentage += 1;
      if (this.errorPercentage === 100) {
        clearInterval(this.timer);
      }
    }, 30);
  }
  private stopTimer = () => {
    clearInterval(this.timer);
    this.errorPercentage = 0;
  }
}

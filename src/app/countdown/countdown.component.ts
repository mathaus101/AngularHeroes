import { Component } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.css"]
})

export class CountdownComponent {
  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {

    const graduationDay = new Date("May 8 2019 17:00");

    const time = new Date(Date.now());

    var delta_seconds= this.diff_seconds(graduationDay, time);
    var delta_mins = delta_seconds / 60;

    this.hours = this.leftPadZero( Math.floor(delta_mins / 60) );
    this.minutes = this.leftPadZero( Math.floor((delta_mins % 60)) );
    this.seconds = this.leftPadZero( Math.floor(delta_seconds % 60 ));

  }

  private diff_seconds(dt2: Date, dt1: Date) 
  {
   var diff = ( dt2.getTime() - dt1.getTime() ) / 1000;    // Seconds
   //console.log(diff);
   return Math.abs(Math.round(diff));
  }  

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
}

import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent, CalendarMode } from 'ionic2-calendar';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';


type event = {
  title : string,
  startTime :  Date,
  endTime : Date,
  allDay : boolean,
  description : string
}


@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  standalone: false,
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent implements OnInit {
  @Input() eventSource!: event[];
  @Input() hasEventsCounter: boolean = false;
  @Input() showEventPerMonth: boolean = true;
  @ViewChild(CalendarComponent) myCal!: CalendarComponent;
  eventPerMonth: event[] = [];

  month='';
  currentDate: Date = new Date();
  calendar = {
    mode: 'month' as CalendarMode,
    formatDayHeader: "E"
  }
  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {

  }
  
  previousMonth(){
    this.myCal.slidePrev();
  }
  
  nextMonth(){
    this.myCal.slideNext();
  }
  
  onCurrentDateChanged(event: Date) {
    this.currentDate = event;
  }
  
  onTitleChange(event:string){
    this.month = event;
    this.eventPerMonth = this.filtrarPorMes(this.currentDate);
    this.myCal.loadEvents();
    this.cdr.detectChanges();
   
  }

  private filtrarPorMes(date: Date){
    if(this.eventSource){
      const listaFiltrada = this.eventSource.filter((event) => {
        const month = event.startTime.getMonth();
        if(month === date.getMonth())
          return true;
      })
      return listaFiltrada;

    }
  
  }
  
  
}

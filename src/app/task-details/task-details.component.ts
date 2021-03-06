import { Component, OnInit, Input } from '@angular/core';
import { EquationString } from './equationString';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})

export class TaskDetailsComponent implements OnInit {
    title: string = 'Addieren';
    subtitle: string = 'Einstieg ohne Zehnerübergang mit Stellentafel: bis 100 bis 1.000';
    content: string = 'Hier lassen sich 2 bis 3 Zahlen im dreistelligen sechsstelligen Bereich schriftlich addieren. Für den Übertrag sind die gestrichelten Kästchen vorgesehen.';
    hideContent = false;

    endDate: string = new Date().toISOString();

    eqs: EquationString ={
        text: [ "Das hier ist eine Formel", "0 = (x^2 + y^2 -1)^3 - x^2 y^3", "toll oder?"],
        mode: [0, 1, 0],
    };

  constructor(public photoService: PhotoService) {
  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  send(){
    if(!this.hideContent)
        this.hideContent = true;
  }

  switchHide(){
    this.hideContent ? this.hideContent=false : this.hideContent=true;
  }
}

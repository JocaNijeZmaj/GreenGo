import { Component, OnInit } from '@angular/core';
import { RecognitionService } from '../services/recognition.service';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.scss']
})
export class RecognitionComponent implements OnInit {

  constructor(private recognitionService : RecognitionService) {
    this.recognitionService.init();
   }

  ngOnInit(): void {

  }

  start(){
    this.recognitionService.start();
  }
  stop(){
    this.recognitionService.stop();
  }

}

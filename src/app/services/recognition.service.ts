import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition : any ;

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  recognition = new webkitSpeechRecognition();
  isStopedSpeechRecognition = false;
  text = '';
  tempWords! :any;

  constructor() {
  }

  init(){
    this.recognition.interimResults = true ;
    this.recognition.lang = 'en-US' ;
    this.recognition.addEventListener('result', (e: any) => {
      console.log('started result');
      const transcript = Array.from(e.results)
        .map((result :any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start(){
    this.isStopedSpeechRecognition = false ;
    this.recognition.start();

    this.recognition.addEventListener('end',(condition : any)=>{
      if(this.isStopedSpeechRecognition){
        this.recognition.stop();
        console.log("stop speech recongition");
      }else{
        this.wordConcat();
        this.recognition.start();
      }
    })

  }

  stop(){
    this.isStopedSpeechRecognition = true;
    this.wordConcat();
    this.recognition.stop();
    console.log("end speech recongition");
  }

  wordConcat(){
    this.text = this.text + "  " + this.tempWords + ".";
    this.tempWords = '';

  }


}

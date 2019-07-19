import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { DataService } from './data.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCgvq57v1_qeefUlRusTECFiRLISob4rw0",
  authDomain: "dice-80d13.firebaseapp.com",
  projectId: "dice-80d13"
});

let db = firebase.firestore();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dice';
  public data: any = [] ;
  val: number ;
  name: string;

  constructor(private http : HttpClient, private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getdata()
      .subscribe(data =>
         {this.data = data;
          this.name = this.data.Name
          this.val = this.data.KEY
          console.log(this.val);
          if (this.val !== -1 || 0)
        db.collection("users").add({
          table1 : this.val,
          table2 : this.val,
          table3 : this.val,
          table4 : this.val,
          table5 : this.val,
          table6 : this.val,
          table7 : this.val,
          table8 : this.val,
          table9 : this.val
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
});
    })
      }
      
}

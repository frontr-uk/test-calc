import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  amount = 0;
  total = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      search: this.amount
    });
    this.form.valueChanges.subscribe((values) => {
      this.updateTotal();
    });
  }

  updateTotal() {
    if(this.form.controls.search.value <= 1000) {
      this.total = this.form.controls.search.value * 1 / 100;
    }
    if(this.form.controls.search.value > 1000 && this.form.controls.search.value <= 5000) {
      this.total = this.form.controls.search.value * 2 / 100;
    }
    if(this.form.controls.search.value > 5000){
      this.total = this.form.controls.search.value * 3 / 100;
    }
  }

}

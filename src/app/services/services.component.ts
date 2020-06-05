import {Component, OnInit} from '@angular/core';
import * as ScrollMagic from 'ScrollMagic';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('.project').each(function() {

      const controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
      triggerElement: this,
      reverse: false
    })
      .setClassToggle(this, 'fade-in')
      .addTo(controller);
  });
  }
}


import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css']
})
export class MarquesComponent  {
 
  url="http://192.63.63.189/?hostgw=192.63.63.189&portgw=8008&alias=menu&theme=CORPORATE"
  
  
}

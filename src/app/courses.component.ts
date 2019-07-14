import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import string_rev from "../api.js";
@Component(
    {
        selector: 'courses',
        template: `
        <input size="65" [value]="string" (keyup.enter)="string=$event.target.value;  onKeyUp()" />
        <br />
        <br />
        <div style="text-align:center;">
        <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'white' " class="btn btn-primary" [class.active]="isActive">Press Enter and Save</button>
        </div>
        `
    }
)
export class CoursesComponent
{   
    string="Please input the string to be reversed here";
    courses;
    isActive=true;
    onSave()
    {
        console.log(this.string);
    }
    onKeyUp()
    {
        console.log(this.string);
    }
    
}
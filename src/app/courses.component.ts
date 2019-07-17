import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import string_rev from "../api.js";
import { RouterModule } from '@angular/router';
@Component(
    {
        selector: 'courses',
        template: `
        <input size="65" [value]="string" (keyup.enter)="string=$event.target.value;  onKeyUp($window)" />
        <br />
        <br />
        <div style="text-align:center;">
        <form>
        <button routerLink="/reverse" (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'white' " class="btn btn-primary" [class.active]="isActive">Press Enter and Submit</button>
        </form>
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
        
        var b=string_rev(this.string);
        console.log(b);
        return b;
    }
    onKeyUp($window)
    {
        
        var b=string_rev(this.string);
        console.log(b);
        return b;
        $window.location.href = './reverse.html';
    }
    
}
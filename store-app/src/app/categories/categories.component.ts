import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterModule,CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent {
  cats = [
    { id:1, name:'Fruits' },
    { id:2, name:'Electronics' },
    { id:3, name:'Books' }
  ];
}

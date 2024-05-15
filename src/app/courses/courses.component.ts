import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courselist: Course[] = [];
  filteredCourses: Course[] = [];
  filterValue : string = '';
  

  constructor(private courseservice : CourseService){}

  //Metod som körs när komponenten initialiseras. Hämtar kurserna från courseService och tilldelar dem till courselist och filteredcourses.
  ngOnInit(){
    this.courseservice.getCourses().subscribe(data =>{
      this.courselist = data;
      this.filteredCourses = data;
    })
  }
      //Metod som filtrerar kurserna utifrån användarens sökfras och returnerar en array med kurser som uppfyller villkoren
      applyFilter():void{
        this.filteredCourses = this.courselist.filter((course)=>{
        const courseCodeString = course.code.toString();
        return(
        course.coursename.toLowerCase().includes(this.filterValue.toLocaleLowerCase()) || courseCodeString.includes(this.filterValue.toLowerCase())
       );
    });
  }

  //sortera på kurskod
  sortCode():void{
    this.filteredCourses = this.courselist.sort((a, b)=> a.code.toLocaleString().localeCompare(b.code.toLocaleString()));
  }
  //sortera på kursnamn
  sortName():void{
    this.filteredCourses = this.courselist.sort((a, b)=>a.coursename.localeCompare(b.coursename));
  }
  //sortera på progression
  sortProgression():void{
    this.filteredCourses = this.courselist.sort((a, b)=> a.progression.localeCompare(b.progression));
  }

}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GradeService } from '../services/grade.service';
import { Project } from 'src/app/api/models/project';

@Component({
  selector: 'grade-icon',
  templateUrl: './grade-icon.component.html',
  styleUrls: ['./grade-icon.component.scss'],
})
export class GradeIconComponent implements OnInit, OnChanges {
  @Input() grade?: number;
  @Input() colorful: boolean = false;

  InputGrade?: number;
  gradeText: string = 'Grade';
  gradeLetter: string = 'G';

  constructor(private gradeService: GradeService) {}

  ngOnInit(): void {
    this.updateGrade();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['grade']) {
      this.updateGrade();
    }
  }

  private updateGrade(): void {
    this.gradeText = this.gradeService.grades[this.grade] || 'Grade';
    this.gradeLetter = this.gradeService.gradeAcronyms[this.grade] || 'G';
  }
}

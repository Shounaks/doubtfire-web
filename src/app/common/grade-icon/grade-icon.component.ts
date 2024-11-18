/* eslint-disable @typescript-eslint/no-unused-vars */
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GradeService} from '../services/grade.service';

@Component({
  selector: 'f-grade-icon',
  templateUrl: './grade-icon.component.html',
  styleUrls: ['./grade-icon.component.scss'],
})
export class GradeIconComponent implements OnInit, OnChanges {
  @Input() grade?: number | string;
  @Input() colorful: boolean = false;

  gradeText: number | string = 'Grade';
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
    this.gradeText =
      typeof this.grade === 'string'
        ? this.gradeService.stringToGrade(this.grade)
        : this.gradeService.grades[this.grade] || 'Grade';
    this.gradeLetter = this.gradeService.gradeAcronyms[this.grade] || 'G';
  }
}

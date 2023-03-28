import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeedbackService } from 'src/app/service/feedback.service';
import { ConstantFiles } from 'src/app/shared/constant-files';

@Component({
  selector: 'app-query-page',
  templateUrl: './query-page.component.html',
  styleUrls: ['./query-page.component.scss']
})
export class QueryPageComponent {

  @Input() form!: FormGroup;
  @Input() questionLabel!: any;
  @Input() queControlName!: any;
  @Input() queFormGroup!: any;

  optionOne = ConstantFiles.booleanSelection;
  optionTwo = ConstantFiles.jobRoleSelection;

  constructor(private feedBackService: FeedbackService) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   // changes.prop contains the old and the new value...
  //   console.log(this.questionLabel);
  // }

  qFourOption!: string[];
  selectionArray!: string[];

  ngOnInit(): void {

  }

  change(event: string) {
    if (this.queFormGroup == 'queThree') {
     this.feedBackService.roleSelected.emit(event);
       if (event === 'Software Engineering')
       this.selectionArray = ConstantFiles.softwareList;
       else if(event === 'Research Engineering')
       this.selectionArray = ConstantFiles.researchList;
       else
       this.selectionArray = [];

       alert(this.selectionArray)
    }
  }

  loadRepsonse()
  {
    // this.feedBackService.roleSelected.subscribe((role: string)=> {
    // });
    this.qFourOption =this.selectionArray;
  }

}

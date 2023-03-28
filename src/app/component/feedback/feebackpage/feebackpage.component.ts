import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feebackpage',
  templateUrl: './feebackpage.component.html',
  styleUrls: ['./feebackpage.component.scss']
})
export class FeebackpageComponent implements OnInit{


  myForm!: FormGroup;

  createForm() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
    });
  }

  emailPattern = 'hello';
  feedBackForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  ngOnInit(): void {
    this.feedBackForm = new FormGroup({
      personalDetail: new FormGroup({
        userName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phoneNo: new FormControl(null, [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        ]),
      }),

      queOne: new FormGroup({
        qOne: new FormControl(null, Validators.required),
      }),

      queTwo: new FormGroup({
        qTwo: new FormControl(null, Validators.required),
      }),

      queThree: new FormGroup({
        qThree: new FormControl(null, Validators.required),
      }),
      queFour: new FormGroup({
        qFour: new FormControl(null, Validators.required),
      }),
      queFive: new FormGroup({
        qFive: new FormControl(null),
      }),
    });
  }
  form: FormGroup = new FormGroup({});

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  stepsArray = [
    {
      formGroupName: 'queOne',
      queControlName: 'qOne',
      label: 'Fill out your Address',
      matStepLabel: 'Interview Time & Manner',
      questionLabel:
        'Was it clear to you the interview time and manner (online or in-person)? ',
    },
    {
      formGroupName: 'queTwo',
      queControlName: 'qTwo',
      label: 'Fill out your que 2',
      matStepLabel: 'Interview discussion on time',
      questionLabel:
        'Was the person conducting the interview or discussion on time?',
    },
    {
      formGroupName: 'queThree',
      queControlName: 'qThree',
      label: 'Fill out your que 3',
      matStepLabel: 'Posts you Applied',
      questionLabel: 'What post did you apply to? ',
    },
    {
      formGroupName: 'queFour',
      queControlName: 'qFour',
      label: 'Fill out your que 4',
      matStepLabel: 'Topics Disussed',
      questionLabel: 'What topics were discussed during the interview? ',
    },
    {
      formGroupName: 'queFive',
      queControlName: 'qFive',
      label: 'Fill out your que 5',
      matStepLabel: 'Feedback Comments',
      questionLabel: 'How can we improve our hiring process? ',
    },
  ];

}

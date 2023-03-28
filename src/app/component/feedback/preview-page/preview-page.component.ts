import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent {

  @Input()form!: FormGroup;
  formSubmitted = false;
  data!:any;
  panelOpenState = false;
  constructor(private router: Router,private dialog: MatDialog,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }



    openDialog(text:string) {
      // const dialogRef = this.dialog.open(ConfirmationDialog,{
      //   data:{
      //     message: 'Are you sure want to '+text+'?',
      //     buttonText: {
      //       ok: 'Submit',
      //       cancel: 'No'
      //     }
      //   }
      // });


      // dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      //   if (confirmed) {

      //     this.data={
      //       'userName': this.form.get('personalDetail')!.get('userName')!.value,
      //       'email': this.form.get('personalDetail')!.get('email')!.value,
      //       'phoneno':this.form.get('personalDetail')!.get('phoneNo')!.value,
      //       'timeofinterview':this.form.get('queOne')!.get('qOne')!.value,
      //       'disussion':this.form.get('queTwo')!.get('qTwo')!.value,
      //       'posts':this.form.get('queThree')!.get('qThree')!.value,
      //       'topics':this.form.get('queFour')!.get('qFour')!.value,
      //       'notes':this.form.get('queFive')!.get('qFive')!.value,
      // }

      // this.apiService.create(this.data).subscribe(
      //   {
      //   next: (response) => {

      //     this.openAlertDialog('Feedback  Saved . Thanks for the Your Valuable Response. Have a Good Day !');
      //     this.form.reset();
      //     this.form.root;
      //   },
      //   error: (error) => {
      //     this.openAlertDialog(error);

      //   }
      //  });


      //   }
      // });
    }

    openAlertDialog(text:any) {
      // const dialogRef = this.dialog.open(AlertDialogComponent,{
      //   data:{
      //     message: text,
      //     buttonText: {
      //       cancel: 'Done'

      //     }

      //   },

      // });

    }
}

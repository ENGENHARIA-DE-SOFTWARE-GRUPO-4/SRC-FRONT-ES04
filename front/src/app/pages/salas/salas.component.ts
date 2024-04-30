import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { createMeeting } from 'src/app/core/models';
import { MeetingService } from 'src/app/core/services/meeting/meeting.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent {

  createMeetingForm = new FormGroup({
    nameSpace: new FormControl(''),
    subject: new FormControl(''),
    date: new FormControl(''),
    course: new FormControl(''),
  })

  constructor(
    private location: Location,
    private meetingService: MeetingService
  ){}
  goBack() {
    this.location.back()
  }

  onSubmit() {
    this.createMeetingForm.setErrors({})
    this.meetingService
      .createMeeting(
        this.createMeetingForm.value.nameSpace!,
        this.createMeetingForm.value.subject!,
        this.createMeetingForm.value.date!,
        this.createMeetingForm.value.course!
      ).subscribe((e) => console.log(e))
    

  }
}

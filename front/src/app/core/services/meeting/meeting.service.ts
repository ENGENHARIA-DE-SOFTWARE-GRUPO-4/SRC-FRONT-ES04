import { Injectable } from '@angular/core';
import { createMeeting, createMeetingResponse, inviteMeetingResponse, meetingResponse } from '../../models';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private httpClient: HttpClient) { }

  createMeeting(
    nameSpace: string,
    subject: string,
    date: string,
    course: string
  ) {
    let data: createMeeting = {
      nameSpace: nameSpace,
      subject: subject,
      date: new Date(date),
      course: course
    }
    return this.httpClient.post<createMeetingResponse>('sala/criar', data)
  }

  getAllMeetings() {
    return this.httpClient.get<meetingResponse[]>('sala')
  }

  getMeetingByDisciplina() {
    return this.httpClient.get<meetingResponse>('sala/disciplina')
  }
  getInviteLink() {
    return this.httpClient.get<inviteMeetingResponse>('sala/invite')
  }

}

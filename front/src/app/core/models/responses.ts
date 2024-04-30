
export interface loginResponse {
    linkRedirect: string;
}

export interface createMeetingResponse {
    linkMeeting: string
}

export interface inviteMeetingResponse {
    linkMeeting: string

}

export interface meetingResponse {
    name: string,
    subject: string,
    date: Date,
    course: string
}

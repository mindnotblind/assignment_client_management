import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Required for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-register',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ✅ Importing FormsModule here
  templateUrl: './meeting-register.component.html',
  styleUrls: ['./meeting-register.component.css']
})
export class MeetingRegisterComponent {
  meeting = { title: '', members: 0, date: '', startTime: '' };

  registerMeeting() {
    let meetings = JSON.parse(localStorage.getItem('meetings') || '[]');
    const newMeeting = { ...this.meeting, id: new Date().getTime() };
    meetings.push(newMeeting);
    localStorage.setItem('meetings', JSON.stringify(meetings));

    alert('Meeting successfully registered!');
    this.meeting = { title: '', members: 0, date: '', startTime: '' };
  }
}

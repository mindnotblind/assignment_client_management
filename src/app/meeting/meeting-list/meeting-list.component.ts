import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent {
  meetings: any[] = [];
  editingMeeting: any | null = null;

  constructor() {
    this.loadMeetings();
  }

  loadMeetings() {
    const storedMeetings = localStorage.getItem('meetings');
    this.meetings = storedMeetings ? JSON.parse(storedMeetings) : [];
  }

  editMeeting(meeting: any) {
    this.editingMeeting = { ...meeting }; // Copy meeting details for editing
  }

  updateMeeting() {
    if (this.editingMeeting) {
      const index = this.meetings.findIndex(m => m.id === this.editingMeeting.id);
      if (index !== -1) {
        this.meetings[index] = { ...this.editingMeeting };
        localStorage.setItem('meetings', JSON.stringify(this.meetings));
        this.editingMeeting = null; // Reset after update
      }
    }
  }

  cancelEdit() {
    this.editingMeeting = null; // Reset editing state
  }

  deleteMeeting(id: number) {
    if (confirm('Are you sure you want to delete this meeting?')) {
      this.meetings = this.meetings.filter(meeting => meeting.id !== id);
      localStorage.setItem('meetings', JSON.stringify(this.meetings));
    }
  }
}

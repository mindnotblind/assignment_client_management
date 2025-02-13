import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-client-register',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent {
  client: { id?: number; name: string; email: string; address: string; password: string; confirmPassword: string } = {
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  };

  registerClient() {
    let clients = JSON.parse(localStorage.getItem('clients') || '[]');
    const newClient = { ...this.client, id: new Date().getTime() };
    clients.push(newClient);
    localStorage.setItem('clients', JSON.stringify(clients));

    alert('Client successfully registered!');
    this.client = { name: '', email: '', address: '', password: '', confirmPassword: '' };
  }
}

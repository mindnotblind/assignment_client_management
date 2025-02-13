import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients: any[] = [];
  editingClient: any | null = null;

  constructor() {
    this.loadClients();
  }

  loadClients() {
    const storedClients = localStorage.getItem('clients');
    this.clients = storedClients ? JSON.parse(storedClients) : [];
  }

  editClient(client: any) {
    this.editingClient = { ...client };
  }

  updateClient() {
    if (this.editingClient) {
      const index = this.clients.findIndex(c => c.id === this.editingClient!.id);
      if (index !== -1) {
        this.clients[index] = { ...this.editingClient };
        localStorage.setItem('clients', JSON.stringify(this.clients));
        this.editingClient = null;
      }
    }
  }

  cancelEdit() {
    this.editingClient = null;
  }

  deleteClient(id: number) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.clients = this.clients.filter(client => client.id !== id);
      localStorage.setItem('clients', JSON.stringify(this.clients));
    }
  }
}

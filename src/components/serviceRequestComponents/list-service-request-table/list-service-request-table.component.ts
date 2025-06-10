import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomSearchComponent } from '../../generic-components/custom-search/custom-search.component';

type TicketStatus = 'in-progress' | 'resolved';

interface Ticket {
  type: string;
  subject: string;
  description: string;
  dateCreated: string;
  status: string;
  statusClass: string;
}


@Component({
  selector: 'app-list-service-request-table',
  imports: [CommonModule, FormsModule, CustomSearchComponent],
  templateUrl: './list-service-request-table.component.html',
  styleUrl: './list-service-request-table.component.scss'
})
export class ListServiceRequestTableComponent {
 // State signals
 activeTab = signal<TicketStatus>('in-progress');
 searchQuery = signal<string>('');
 currentPage = signal<number>(1);
 itemsPerPage = signal<number>(5);

 searchTerm = signal<string>('');

 // Sample data - in a real app, this would come from a service
 allTickets = signal<Record<TicketStatus, Ticket[]>>({
   'in-progress': [
     {
       type: 'Query',
       subject: 'Failed bank statement',
       description: 'I have not been able to access my bank statements for the past 3 days',
       dateCreated: '27/07/2024',
       status: 'New',
       statusClass: 'assigned'
     },
     {
       type: 'Issue',
       subject: 'Login problems',
       description: 'Cannot login to my account despite correct credentials',
       dateCreated: '26/07/2024',
       status: 'In progress',
       statusClass: 'in-progress'
     },
     {
       type: 'Request',
       subject: 'Account verification',
       description: 'Need to verify my account for higher transaction limits',
       dateCreated: '25/07/2024',
       status: 'Assigned',
       statusClass: 'assigned'
     },
     {
       type: 'Bug',
       subject: 'Mobile app crash',
       description: 'App crashes when trying to view transaction history',
       dateCreated: '24/07/2024',
       status: 'In progress',
       statusClass: 'in-progress'
     },
     {
       type: 'Query',
       subject: 'Missing transaction',
       description: 'A transaction from yesterday is not showing in my history',
       dateCreated: '23/07/2024',
       status: 'New',
       statusClass: 'assigned'
     },
     {
      type: 'Request',
      subject: 'Account verification',
      description: 'Need to verify my account for higher transaction limits',
      dateCreated: '25/07/2024',
      status: 'Assigned',
      statusClass: 'assigned'
    },
    {
      type: 'Bug',
      subject: 'Mobile app crash',
      description: 'App crashes when trying to view transaction history',
      dateCreated: '24/07/2024',
      status: 'In progress',
      statusClass: 'in-progress'
    },
    {
      type: 'Query',
      subject: 'Missing transaction',
      description: 'A transaction from yesterday is not showing in my history',
      dateCreated: '23/07/2024',
      status: 'New',
      statusClass: 'assigned'
    }
   ],
   'resolved': [
     {
       type: 'Request',
       subject: 'Password reset',
       description: 'Needed to reset my password after forgetting it',
       dateCreated: '20/07/2024',
       status: 'Resolved',
       statusClass: 'resolved'
     },
     {
       type: 'Issue',
       subject: 'Transfer failed',
       description: 'International transfer failed but money was deducted',
       dateCreated: '18/07/2024',
       status: 'Resolved',
       statusClass: 'resolved'
     },
     {
       type: 'Query',
       subject: 'Statement discrepancy',
       description: 'Difference between online balance and statement balance',
       dateCreated: '15/07/2024',
       status: 'Resolved',
       statusClass: 'resolved'
     }
   ]
 });

 // Computed values
 filteredTickets = computed(() => {
   const tickets = this.allTickets()[this.activeTab()];
   const query = this.searchQuery().toLowerCase();
   
   if (!query) return tickets;
   
   return tickets.filter(ticket => 
     ticket.subject.toLowerCase().includes(query) || 
     ticket.description.toLowerCase().includes(query) ||
     ticket.type.toLowerCase().includes(query) ||
     ticket.status.toLowerCase().includes(query)
   );
 });

 totalPages = computed(() => 
   Math.max(1, Math.ceil(this.filteredTickets().length / this.itemsPerPage()))
 );

 paginatedTickets = computed(() => {
   const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
   const endIndex = startIndex + this.itemsPerPage();
   return this.filteredTickets().slice(startIndex, endIndex);
 });

 paginationNumbers = computed(() => 
   Array.from({ length: this.totalPages() }, (_, i) => i + 1)
 );

 // Pagination control states
 isFirstPage = computed(() => this.currentPage() === 1);
 isLastPage = computed(() => this.currentPage() === this.totalPages());
 hasPagination = computed(() => this.filteredTickets().length > this.itemsPerPage());

 ngOnInit(): void {
   // Initialization if needed
 }

 // Tab management
 changeTab(tab: TicketStatus): void {
   this.activeTab.set(tab);
   this.resetToFirstPage();
 }

 // Search functionality
 onSearch(query: string): void {
   this.searchQuery.set(query);
   this.resetToFirstPage();
 }

 // Pagination controls
 changePage(page: number): void {
   if (page >= 1 && page <= this.totalPages()) {
     this.currentPage.set(page);
   }
 }

 prevPage(): void {
   if (!this.isFirstPage()) {
     this.currentPage.update(val => val - 1);
   }
 }

 nextPage(): void {
   if (!this.isLastPage()) {
     this.currentPage.update(val => val + 1);
   }
 }

 // Helper methods
 private resetToFirstPage(): void {
   this.currentPage.set(1);
 }

 // For template accessibility
//  getPaginationLabel(): string {
//    const start = (this.currentPage() - 1) * this.itemsPerPage() + 1;
//    const end = Math.min(
//      this.currentPage() * this.itemsPerPage(),
//      this.filteredTickets().length
//    );
//    return `Showing ${start} to ${end} of ${this.filteredTickets().length} items`;
//  }
}
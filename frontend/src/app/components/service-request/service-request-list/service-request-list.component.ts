import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceRequestService } from '../../../services/service-request.service';
import { ServiceRequest } from '../../../models/service-request.model';

@Component({
  selector: 'app-service-request-list',
  templateUrl: './service-request-list.component.html',
  styleUrls: ['./service-request-list.component.css']
})
export class ServiceRequestListComponent implements OnInit {
  serviceRequests: ServiceRequest[] = [];

  constructor(private serviceRequestService: ServiceRequestService, private router: Router) {}

  ngOnInit(): void {
    this.loadServiceRequests();
  }

  loadServiceRequests(): void {
    this.serviceRequestService.getServiceRequests().subscribe(
      (data: { serviceRequests: ServiceRequest[] }) => {
        console.log('Service requests received:', data.serviceRequests);
        this.serviceRequests = data.serviceRequests;
      },
      error => {
        console.error('Error fetching service requests', error);
      }
    );
  }

  navigateToNewServiceRequest(): void {
    this.router.navigate(['/service-requests/new']); // Asegúrate de que la ruta es correcta
  }

  editServiceRequest(id: number): void {
    this.router.navigate(['/service-requests/edit', id]); // Asegúrate de que la ruta es correcta
  }

  deleteServiceRequest(id: number): void {
    this.serviceRequestService.deleteServiceRequest(id).subscribe(() => {
      this.loadServiceRequests(); // Reload the service request list after deletion
    });
  }
}

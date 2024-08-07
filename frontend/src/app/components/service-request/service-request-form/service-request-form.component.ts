import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceRequestService } from '../../../services/service-request.service';
import { ServiceRequest } from '../../../models/service-request.model';

@Component({
  selector: 'app-service-request-form',
  templateUrl: './service-request-form.component.html',
  styleUrls: ['./service-request-form.component.css']
})
export class ServiceRequestFormComponent implements OnInit {
  serviceRequestForm!: FormGroup;
  serviceRequestId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private serviceRequestService: ServiceRequestService
  ) { }

  ngOnInit(): void {
    this.serviceRequestId = +(this.route.snapshot.paramMap.get('id') ?? 0);  // Usa ?? para manejar null
    this.initForm();

    if (this.serviceRequestId) {
      this.loadServiceRequest();
    }
  }

  initForm(): void {
    this.serviceRequestForm = this.formBuilder.group({
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      fecha_creacion: ['', Validators.required],
      fecha_actualizacion: ['', Validators.required],
      usuario_id: ['', Validators.required]
    });
  }

  loadServiceRequest(): void {
    this.serviceRequestService.getServiceRequest(this.serviceRequestId).subscribe(
      (serviceRequest: ServiceRequest) => {
        console.log('Service request loaded:', serviceRequest);
        this.serviceRequestForm.patchValue({
          descripcion: serviceRequest.descripcion,
          estado: serviceRequest.estado,
          fecha_creacion: serviceRequest.fecha_creacion.substring(0, 10),
          fecha_actualizacion: serviceRequest.fecha_actualizacion.substring(0, 10),
          usuario_id: serviceRequest.usuario_id
        });
      },
      error => console.error('Error loading service request', error)
    );
  }

  save(): void {
    if (this.serviceRequestForm.valid) {
      const serviceRequest = this.serviceRequestForm.value;
      if (this.serviceRequestId) {
        this.serviceRequestService.updateServiceRequest(this.serviceRequestId, serviceRequest).subscribe(
          () => this.router.navigate(['/service-requests']),
          error => console.error('Error updating service request', error)
        );
      } else {
        this.serviceRequestService.createServiceRequest(serviceRequest).subscribe(
          () => this.router.navigate(['/service-requests']),
          error => console.error('Error creating service request', error)
        );
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/service-requests']);
  }
}

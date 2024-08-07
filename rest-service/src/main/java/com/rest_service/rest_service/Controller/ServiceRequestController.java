package com.rest_service.rest_service.Controller;

import com.rest_service.rest_service.Model.ServiceRequest;
import com.rest_service.rest_service.Service.ServiceRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/servicerequests")
public class ServiceRequestController {

    @Autowired
    private ServiceRequestService serviceRequestService;

    @PostMapping
    public ServiceRequest createServiceRequest(@RequestBody ServiceRequest serviceRequest) {
        return serviceRequestService.createServiceRequest(serviceRequest);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceRequest> getServiceRequestById(@PathVariable Long id) {
        ServiceRequest serviceRequest = serviceRequestService.getServiceRequestById(id);
        return ResponseEntity.ok(serviceRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceRequest> updateServiceRequest(@PathVariable Long id, @RequestBody ServiceRequest serviceRequestDetails) {
        ServiceRequest updatedServiceRequest = serviceRequestService.updateServiceRequest(id, serviceRequestDetails);
        return ResponseEntity.ok(updatedServiceRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceRequest(@PathVariable Long id) {
        serviceRequestService.deleteServiceRequest(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public List<ServiceRequest> getAllServiceRequests() {
        return serviceRequestService.getAllServiceRequests();
    }
}


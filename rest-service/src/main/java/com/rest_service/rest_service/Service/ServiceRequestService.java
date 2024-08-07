package com.rest_service.rest_service.Service;

import java.util.List;

import com.rest_service.rest_service.Model.ServiceRequest;

public interface ServiceRequestService {
    ServiceRequest createServiceRequest(ServiceRequest serviceRequest);
    ServiceRequest getServiceRequestById(Long id);
    ServiceRequest updateServiceRequest(Long id, ServiceRequest serviceRequestDetails);
    void deleteServiceRequest(Long id);
    List<ServiceRequest> getAllServiceRequests();
}
package com.rest_service.rest_service.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest_service.rest_service.Model.ServiceRequest;
import com.rest_service.rest_service.Repository.ServiceRequestRepository;
import com.rest_service.rest_service.Service.ServiceRequestService;


@Service
public class ServiceRequestServiceImpl implements ServiceRequestService {

    @Autowired
    private ServiceRequestRepository serviceRequestRepository;

    @Override
    public ServiceRequest createServiceRequest(ServiceRequest serviceRequest) {
        return serviceRequestRepository.save(serviceRequest);
    }

    @Override
    public ServiceRequest getServiceRequestById(Long id) {
        return serviceRequestRepository.findById(id).orElseThrow();
    }

    @Override
    public ServiceRequest updateServiceRequest(Long id, ServiceRequest serviceRequestDetails) {
        ServiceRequest serviceRequest = serviceRequestRepository.findById(id).orElseThrow();
        serviceRequest.setDescripcion(serviceRequestDetails.getDescripcion());
        serviceRequest.setEstado(serviceRequestDetails.getEstado());
        serviceRequest.setFechaActualizacion(serviceRequestDetails.getFechaActualizacion());
        return serviceRequestRepository.save(serviceRequest);
    }

    @Override
    public void deleteServiceRequest(Long id) {
        ServiceRequest serviceRequest = serviceRequestRepository.findById(id).orElseThrow();
        serviceRequestRepository.delete(serviceRequest);
    }

    @Override
    public List<ServiceRequest> getAllServiceRequests() {
        return serviceRequestRepository.findAll();
    }
}

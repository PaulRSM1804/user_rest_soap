package com.rest_service.rest_service.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rest_service.rest_service.Model.ServiceRequest;

public interface ServiceRequestRepository extends JpaRepository<ServiceRequest, Long> {
}


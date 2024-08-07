package com.rest_service.rest_service.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rest_service.rest_service.Model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
}

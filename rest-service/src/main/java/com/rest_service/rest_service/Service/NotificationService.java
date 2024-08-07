package com.rest_service.rest_service.Service;

import java.util.List;

import com.rest_service.rest_service.Model.Notification;


public interface NotificationService {
    Notification createNotification(Notification notification);
    Notification getNotificationById(Long id);
    void deleteNotification(Long id);
    List<Notification> getAllNotifications();
}

package com.rest_service.rest_service.Service;

import java.util.List;

import com.rest_service.rest_service.Model.TechnicianAssignment;

public interface TechnicianAssignmentService {
    TechnicianAssignment createAssignment(TechnicianAssignment assignment);
    TechnicianAssignment getAssignmentById(Long id);
    TechnicianAssignment updateAssignment(Long id, TechnicianAssignment assignmentDetails);
    void deleteAssignment(Long id);
    List<TechnicianAssignment> getAllAssignments();
}

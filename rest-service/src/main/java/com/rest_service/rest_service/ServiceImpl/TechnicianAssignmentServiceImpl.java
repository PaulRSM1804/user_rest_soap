package com.rest_service.rest_service.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest_service.rest_service.Model.TechnicianAssignment;
import com.rest_service.rest_service.Repository.TechnicianAssignmentRepository;
import com.rest_service.rest_service.Service.TechnicianAssignmentService;


@Service
public class TechnicianAssignmentServiceImpl implements TechnicianAssignmentService {

    @Autowired
    private TechnicianAssignmentRepository technicianAssignmentRepository;

    @Override
    public TechnicianAssignment createAssignment(TechnicianAssignment assignment) {
        return technicianAssignmentRepository.save(assignment);
    }

    @Override
    public TechnicianAssignment getAssignmentById(Long id) {
        return technicianAssignmentRepository.findById(id).orElseThrow();
    }

    @Override
    public TechnicianAssignment updateAssignment(Long id, TechnicianAssignment assignmentDetails) {
        TechnicianAssignment assignment = technicianAssignmentRepository.findById(id).orElseThrow();
        assignment.setSolicitud(assignmentDetails.getSolicitud());
        assignment.setTecnico(assignmentDetails.getTecnico());
        return technicianAssignmentRepository.save(assignment);
    }

    @Override
    public void deleteAssignment(Long id) {
        TechnicianAssignment assignment = technicianAssignmentRepository.findById(id).orElseThrow();
        technicianAssignmentRepository.delete(assignment);
    }

    @Override
    public List<TechnicianAssignment> getAllAssignments() {
        return technicianAssignmentRepository.findAll();
    }
}

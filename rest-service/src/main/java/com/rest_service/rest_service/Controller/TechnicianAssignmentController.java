package com.rest_service.rest_service.Controller;

import com.rest_service.rest_service.Model.TechnicianAssignment;
import com.rest_service.rest_service.Service.TechnicianAssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assignments")
public class TechnicianAssignmentController {

    @Autowired
    private TechnicianAssignmentService technicianAssignmentService;

    @PostMapping
    public TechnicianAssignment createAssignment(@RequestBody TechnicianAssignment assignment) {
        return technicianAssignmentService.createAssignment(assignment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TechnicianAssignment> getAssignmentById(@PathVariable Long id) {
        TechnicianAssignment assignment = technicianAssignmentService.getAssignmentById(id);
        return ResponseEntity.ok(assignment);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TechnicianAssignment> updateAssignment(@PathVariable Long id, @RequestBody TechnicianAssignment assignmentDetails) {
        TechnicianAssignment updatedAssignment = technicianAssignmentService.updateAssignment(id, assignmentDetails);
        return ResponseEntity.ok(updatedAssignment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssignment(@PathVariable Long id) {
        technicianAssignmentService.deleteAssignment(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public List<TechnicianAssignment> getAllAssignments() {
        return technicianAssignmentService.getAllAssignments();
    }
}


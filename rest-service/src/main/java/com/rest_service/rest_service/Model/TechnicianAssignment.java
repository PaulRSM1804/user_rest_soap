package com.rest_service.rest_service.Model;

import jakarta.persistence.Entity; // Add this import statement
import jakarta.persistence.GeneratedValue; // Add this import statement
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class TechnicianAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "solicitud_id")
    private ServiceRequest solicitud;

    @ManyToOne
    @JoinColumn(name = "tecnico_id")
    private AppUser tecnico;

    //Constructor
    public TechnicianAssignment() {
    }

    public TechnicianAssignment(ServiceRequest solicitud, AppUser tecnico) {
        this.solicitud = solicitud;
        this.tecnico = tecnico;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ServiceRequest getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(ServiceRequest solicitud) {
        this.solicitud = solicitud;
    }

    public AppUser getTecnico() {
        return tecnico;
    }

    public void setTecnico(AppUser tecnico) {
        this.tecnico = tecnico;
    }
}

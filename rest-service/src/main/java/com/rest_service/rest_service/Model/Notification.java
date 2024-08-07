package com.rest_service.rest_service.Model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mensaje;
    private Date fechaEnvio;

    @ManyToOne
    @JoinColumn(name = "solicitud_id")
    private ServiceRequest solicitud;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private AppUser usuario;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public Date getFechaEnvio() {
        return fechaEnvio;
    }

    public void setFechaEnvio(Date fechaEnvio) {
        this.fechaEnvio = fechaEnvio;
    }

    public ServiceRequest getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(ServiceRequest solicitud) {
        this.solicitud = solicitud;
    }

    public AppUser getUsuario() {
        return usuario;
    }

    public void setUsuario(AppUser usuario) {
        this.usuario = usuario;
    }
}

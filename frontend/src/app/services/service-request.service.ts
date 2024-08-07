import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceRequest } from '../models/service-request.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {
  private soapUrl = 'http://localhost:8000/wsdl?wsdl';

  constructor(private http: HttpClient) {}

  private createSoapEnvelope(action: string, body: string): string {
    return `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://www.example.org/ServiceRequest/">
        <soapenv:Header/>
        <soapenv:Body>
          <ser:${action}>
            ${body}
          </ser:${action}>
        </soapenv:Body>
      </soapenv:Envelope>
    `;
  }

  private extractData(response: any, action: string): any {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response, "text/xml");
    const serviceRequestsNodes = xmlDoc.getElementsByTagName("serviceRequests");
    
    const serviceRequests: ServiceRequest[] = [];
    
    for (let i = 0; i < serviceRequestsNodes.length; i++) {
      const node = serviceRequestsNodes[i];
      const serviceRequest: ServiceRequest = {
        id: Number(node.getElementsByTagName("id")[0]?.textContent || 0),
        descripcion: node.getElementsByTagName("descripcion")[0]?.textContent || '',
        estado: node.getElementsByTagName("estado")[0]?.textContent || '',
        fecha_creacion: node.getElementsByTagName("fecha_creacion")[0]?.textContent || '',
        fecha_actualizacion: node.getElementsByTagName("fecha_actualizacion")[0]?.textContent || '',
        usuario_id: Number(node.getElementsByTagName("usuario_id")[0]?.textContent || 0),
      };
      serviceRequests.push(serviceRequest);
    }
    
    return { serviceRequests };
  }

  getServiceRequests(): Observable<{ serviceRequests: ServiceRequest[] }> {
    const soapBody = this.createSoapEnvelope('GetServiceRequests', '');
    const headers = new HttpHeaders({ 'Content-Type': 'text/xml' });

    return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' }).pipe(
      map(response => this.extractData(response, 'GetServiceRequests'))
    );
  }

    getServiceRequest(id: number): Observable<ServiceRequest> {
        const soapBody = this.createSoapEnvelope('GetServiceRequest', `<id>${id}</id>`);
        //const headers = new HttpHeaders({ 'Content-Type': 'text/xml' });
    
        return this.http.post(this.soapUrl, soapBody, { /*headers*/ responseType: 'text' }).pipe(
        map(response => this.extractData(response, 'GetServiceRequest'))
        );
    }

    createServiceRequest(serviceRequest: ServiceRequest): Observable<any> {
        const soapBody = this.createSoapEnvelope('CreateServiceRequest', `
        <descripcion>${serviceRequest.descripcion}</descripcion>
        <estado>${serviceRequest.estado}</estado>
        <fecha_creacion>${serviceRequest.fecha_creacion}</fecha_creacion>
        <fecha_actualizacion>${serviceRequest.fecha_actualizacion}</fecha_actualizacion>
        <usuario_id>${serviceRequest.usuario_id}</usuario_id>
        `);
        const headers = new HttpHeaders({ 'Content-Type': 'text/xml' });
    
        return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
    }

    updateServiceRequest(id: number, serviceRequest: ServiceRequest): Observable<any> {
        const soapBody = this.createSoapEnvelope('UpdateServiceRequest', `
        <id>${id}</id>
        <descripcion>${serviceRequest.descripcion}</descripcion>
        <estado>${serviceRequest.estado}</estado>
        <fecha_creacion>${serviceRequest.fecha_creacion}</fecha_creacion>
        <fecha_actualizacion>${serviceRequest.fecha_actualizacion}</fecha_actualizacion>
        <usuario_id>${serviceRequest.usuario_id}</usuario_id>
        `);
        const headers = new HttpHeaders({ 'Content-Type': 'text/xml' });
    
        return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
    }

    deleteServiceRequest(id: number): Observable<any> {
        const soapBody = this.createSoapEnvelope('DeleteServiceRequest', `<id>${id}</id>`);
        const headers = new HttpHeaders({ 'Content-Type': 'text/xml' });
    
        return this.http.post(this.soapUrl, soapBody, { headers, responseType: 'text' });
    }

}

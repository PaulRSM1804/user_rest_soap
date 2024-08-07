const express = require('express');
const soap = require('soap');
const fs = require('fs');
const cors = require('cors');
const serviceRequestService = require('./services/serviceRequestService');
const path = require('path');

const app = express();
const port = 8000;

app.use(cors());

const wsdlPath = path.join(__dirname, 'wsdl', 'serviceRequest.wsdl');
const wsdlFile = fs.readFileSync(wsdlPath, 'utf8');

const service = {
  ServiceRequestService: {
    ServiceRequestPort: {
      CreateServiceRequest: async (args) => {
        console.log('CreateServiceRequest args:', args);
        try {
          const result = await serviceRequestService.createServiceRequest(args);
          console.log('CreateServiceRequest result:', result);
          return result;
        } catch (error) {
          console.error('Error in CreateServiceRequest:', error);
          throw {
            Fault: {
              faultcode: 'Client',
              faultstring: error.message,
            },
          };
        }
      },
      GetServiceRequests: async (args) => {
        console.log('GetServiceRequests args:', args);
        try {
          const result = await serviceRequestService.getServiceRequests();
          console.log('GetServiceRequests result:', result);
          return { serviceRequests: result };
        } catch (error) {
          console.error('Error in GetServiceRequests:', error);
          throw {
            Fault: {
              faultcode: 'Client',
              faultstring: error.message,
            },
          };
        }
      },
      GetServiceRequest: async (args) => {
        console.log('GetServiceRequest args:', args);
        try {
          const result = await serviceRequestService.getServiceRequest(args);
          console.log('GetServiceRequest result:', result);
          return result;
        } catch (error) {
          console.error('Error in GetServiceRequest:', error);
          throw {
            Fault: {
              faultcode: 'Client',
              faultstring: error.message,
            },
          };
        }
      },
      UpdateServiceRequest: async (args) => {
        console.log('UpdateServiceRequest args:', args);
        try {
          const result = await serviceRequestService.updateServiceRequest(args);
          console.log('UpdateServiceRequest result:', result);
          return result;
        } catch (error) {
          console.error('Error in UpdateServiceRequest:', error);
          throw {
            Fault: {
              faultcode: 'Client',
              faultstring: error.message,
            },
          };
        }
      },
      DeleteServiceRequest: async (args) => {
        console.log('DeleteServiceRequest args:', args);
        try {
          const result = await serviceRequestService.deleteServiceRequest(args);
          console.log('DeleteServiceRequest result:', result);
          return result;
        } catch (error) {
          console.error('Error in DeleteServiceRequest:', error);
          throw {
            Fault: {
              faultcode: 'Client',
              faultstring: error.message,
            },
          };
        }
      }
    }
  }
};

soap.listen(app, '/wsdl', service, wsdlFile, () => {
  console.log(`SOAP server initialized at http://localhost:${port}/wsdl?wsdl`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

package com.rest_service.rest_service.Service;

import java.util.List;

import com.rest_service.rest_service.Model.Report;


public interface ReportService {
    Report createReport(Report report);
    Report getReportById(Long id);
    void deleteReport(Long id);
    List<Report> getAllReports();
}

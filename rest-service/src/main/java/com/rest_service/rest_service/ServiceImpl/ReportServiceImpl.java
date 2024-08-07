package com.rest_service.rest_service.ServiceImpl;

import com.rest_service.rest_service.Model.Report;
import com.rest_service.rest_service.Repository.ReportRepository;
import com.rest_service.rest_service.Service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportRepository reportRepository;

    @Override
    public Report createReport(Report report) {
        return reportRepository.save(report);
    }

    @Override
    public Report getReportById(Long id) {
        return reportRepository.findById(id).orElseThrow();
    }

    @Override
    public void deleteReport(Long id) {
        Report report = reportRepository.findById(id).orElseThrow();
        reportRepository.delete(report);
    }

    @Override
    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }
}

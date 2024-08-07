package com.rest_service.rest_service.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest_service.rest_service.Model.AppUser;
import com.rest_service.rest_service.Repository.AppUserRepository;
import com.rest_service.rest_service.Service.AppUserService;



@Service
public class AppUserServiceImpl implements AppUserService {

    @Autowired
    private AppUserRepository appUserRepository;

    @Override
    public AppUser createUser(AppUser user) {
        return appUserRepository.save(user);
    }

    @Override
    public AppUser getUserById(Long id) {
        return appUserRepository.findById(id).orElseThrow();
    }

    @Override
    public AppUser updateUser(Long id, AppUser userDetails) {
        AppUser user = appUserRepository.findById(id).orElseThrow();
        user.setNombre(userDetails.getNombre());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setRol(userDetails.getRol());
        return appUserRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        AppUser user = appUserRepository.findById(id).orElseThrow();
        appUserRepository.delete(user);
    }

    @Override
    public List<AppUser> getAllUsers() {
        return appUserRepository.findAll();
    }
}

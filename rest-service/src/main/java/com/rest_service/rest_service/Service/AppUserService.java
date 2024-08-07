package com.rest_service.rest_service.Service;

import java.util.List;

import com.rest_service.rest_service.Model.AppUser;


public interface AppUserService {
    AppUser createUser(AppUser user);
    AppUser getUserById(Long id);
    AppUser updateUser(Long id, AppUser userDetails);
    void deleteUser(Long id);
    List<AppUser> getAllUsers();
}

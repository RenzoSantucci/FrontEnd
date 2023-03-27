/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.rs.Service;

import com.portfolio.rs.Entity.Persona;
import com.portfolio.rs.Repository.IPersonaRepository;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author 54261
 */
@Service
@Transactional
public class ImpPersonaService{
    @Autowired IPersonaRepository ipersonarepository;
        
    public List<Persona> list(){
         return ipersonarepository.findAll();
     }
     
     public Optional<Persona> getOne(int id){
         return ipersonarepository.findById(id);
     }
     
     public Optional<Persona> getByNombre(String nombre){
         return ipersonarepository.findByNombre(nombre);
     }
     
     public void save(Persona persona  ){
         ipersonarepository.save(persona);
     }
     
     public void delete(int id){
         ipersonarepository.deleteById(id);
     }
     
     public boolean existsById(int id){
         return ipersonarepository.existsById(id);
     }
     
     public boolean existsByNombre(String nombre){
         return ipersonarepository.existsByNombre(nombre);
     }
    
}

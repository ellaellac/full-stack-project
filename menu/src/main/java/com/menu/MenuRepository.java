package com.menu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
//    void deleteMenuById(long id);

//    findById
//    findAll
//    save
//    delete

}

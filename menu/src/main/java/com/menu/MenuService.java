package com.menu;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    //Create
    public void addMenu(Menu menu) {
        menuRepository.save(menu);
    }

    //Read

    public List<Menu> getAllMenu() {
        return menuRepository.findAll();
    }

    public Menu getMenuById(long id) {
        Optional<Menu> menu = menuRepository.findById(id);
        if (menu.isEmpty()) {
            throw new MenuNotFoundException();
        }
        return menu.get();
    }

    public List<Menu> getMenuByVegetarian() {
        List<Menu> menu = menuRepository.findAll();
        List<Menu> filteredMenu = new ArrayList<>();

        for (Menu item : menu) {
            if (item.getVegetarian()) {
                filteredMenu.add(item);
            }
        }

        return filteredMenu;

    }

    //Update

    public void updateMenu(Menu newMenu, long id) {
        if (!menuRepository.existsById(id)) {
            throw new MenuNotFoundException();
        }
        newMenu.setId(id);

        menuRepository.save(newMenu);
    }

    //Delete
    @Transactional
    public void deleteMenuById(long id) {
        if (!menuRepository.existsById(id)) {
            throw new MenuNotFoundException();
        }
        menuRepository.deleteById(id);
    }


}

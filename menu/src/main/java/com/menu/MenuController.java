package com.menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @ExceptionHandler
    public ResponseEntity<String> handleException(MenuNotFoundException error) {
        String errorMessage = error.getMessage();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    //Create
    @PostMapping("/menu")
    public ResponseEntity<Menu> createMenu(@RequestBody Menu menu) {
        menuService.addMenu(menu);
        return ResponseEntity.status(HttpStatus.CREATED).body(menu);
    }

    //Read
    @GetMapping("/menu")
    public ResponseEntity<List<Menu>> getAllMenu() {
        return ResponseEntity.status(HttpStatus.OK).body(menuService.getAllMenu());
    }

    @GetMapping("/menu/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(menuService.getMenuById(id));
    }

    @GetMapping("/menu/vegetarian")
    public ResponseEntity <List <Menu>> getMenuByVegetarian() {
        return ResponseEntity.status(HttpStatus.OK).body(menuService.getMenuByVegetarian());
    }

    //Update
    @PutMapping("/menu/{id}")
    public ResponseEntity<Menu> updateMenuById(@RequestBody Menu newMenu, @PathVariable long id) {
        newMenu.setId(id);
        menuService.updateMenu(newMenu, id);
        return ResponseEntity.status((HttpStatus.OK)).body(newMenu);
    }

    //Delete
    @DeleteMapping("/menu/{id}")
    public ResponseEntity<Menu> deleteMenuById(@PathVariable long id) {
        menuService.deleteMenuById(id);
        return ResponseEntity.status((HttpStatus.NO_CONTENT)).build();
    }
}

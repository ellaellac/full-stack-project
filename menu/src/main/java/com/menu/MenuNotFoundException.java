package com.menu;

public class MenuNotFoundException extends RuntimeException {
    public MenuNotFoundException() {
        super("Menu Item Not Found.");
    }
}

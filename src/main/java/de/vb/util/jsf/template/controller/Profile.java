package de.vb.util.jsf.template.controller;

import java.io.Serializable;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import lombok.Data;

@Named("profile")
@SessionScoped
@Data
public class Profile implements Serializable {

    /**
     * Width of the sidebar in pixels.
     */
    private short sidebarWidth = 250;

}

package com.mrvelibor.testiranjestudenata;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Velibor on 16-Jun-17.
 */
@Controller
public class TestiranjeMvcConfig {

    @RequestMapping(value={"/testiranje/**"})
    public String angular(Model model) {
        return "testiranje";
    }

    @RequestMapping(value={"/"})
    public String home(Model model) {
        return "redirect:testiranje";
    }

}

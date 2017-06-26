package com.mrvelibor.testiranjestudenata;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Velibor on 16-Jun-17.
 */
@Controller
public class TestiranjeViewController {

    @RequestMapping(value={"/testiranje/**"})
    public String angular() {
        return "testiranje";
    }

    @RequestMapping(value={"/"})
    public String home() {
        return "redirect:testiranje";
    }

}

package com.tboss.ssm.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tboss.ssm.po.LoginCustom;
import com.tboss.ssm.service.LoginService;

@Controller
public class LoginController {
	@Autowired
	private LoginService loginService;
	@ResponseBody
	@RequestMapping("/login")
	
	public  LoginCustom queryLogin(LoginCustom loginCustom) throws Exception{
		
		return loginService.findLoginList(loginCustom);
	}
	
	@RequestMapping("/adminMain")
	public String adminMain() throws Exception{
		 return "redirect:/adminMain.jsp "; 
		
	}
	
}

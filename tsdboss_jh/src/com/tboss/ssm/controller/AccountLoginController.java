package com.tboss.ssm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tboss.ssm.po.Yhdang;
import com.tboss.ssm.service.AccountLoginService;



@Controller
public class AccountLoginController {
    
	@Autowired
	private AccountLoginService accountLoginService;
	@RequestMapping("/AccountLogin")
	@ResponseBody
	public List<Yhdang> AccountLogin(String hth,String passwork) throws Exception{
		
		List<Yhdang> yhdangs = null;
		yhdangs = accountLoginService.findYhdangList(hth, passwork);
		
		return yhdangs;
	}
	
	@RequestMapping("/AccountPassword")
	@ResponseBody
	public String AccountPassword (String hth , String passwork) throws Exception{
		
		String ret = null;
		ret = accountLoginService.updateYhdang(hth, passwork);
		return ret;
		
	}
}

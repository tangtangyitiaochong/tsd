package com.tboss.ssm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tboss.ssm.po.TBsMenuInfo;
import com.tboss.ssm.service.SystemmenuService;


@Controller
public class Systemmenu {
	
	@Autowired
	private SystemmenuService systemmenuService;
	@RequestMapping("/menuTree")
	@ResponseBody
	public List<TBsMenuInfo> menuTree(String roleId) throws Exception{
		List<TBsMenuInfo> tBsMenuInfos = null;
		tBsMenuInfos = systemmenuService.findMenuList(roleId);
		return tBsMenuInfos;
	}
	

}

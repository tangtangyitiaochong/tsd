package com.tboss.ssm.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;



import com.tboss.ssm.po.ItemsCustom;
import com.tboss.ssm.po.ItemsQueryVo;
import com.tboss.ssm.service.ItemsService;

@Controller
public class ItemsController {
 @Autowired

  private ItemsService itemsService;
 
 @RequestMapping("/queryitems")
  
     public String queryitems(Model model,ItemsQueryVo itemsQueryVo) throws Exception{
	 
	   List<ItemsCustom> itemsList=itemsService.findItemsList(itemsQueryVo);
	   
	   model.addAttribute("itemsList",itemsList);

		return "items/itemsList";
	 
	 
 }
 @RequestMapping("/editItems")
     public String editItems(Model model,Integer id) throws Exception{
    	 
    	 ItemsCustom itemsCustom = itemsService.findItemsById(id);
    	 
    	 model.addAttribute("itemsCustom", itemsCustom);
    	
    	 return "items/editItems";
     }
 
 @RequestMapping("/editItemsSubmit")
     public String editItemsSubmit(HttpServletRequest request ,Integer id,ItemsCustom itemsCustom ) throws Exception{
    	 itemsService.updateItems(id, itemsCustom);
    	 return "sucssess";
     }
 
 @RequestMapping("/requestJson")
 @ResponseBody
  public ItemsCustom requestJson (ItemsCustom itemsCustom){
	 
	 return itemsCustom;
 }
}

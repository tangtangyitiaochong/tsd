package com.tboss.ssm.service;

import java.util.List;



import com.tboss.ssm.po.Yhdang;

public interface AccountLoginService {
      
	 public List<Yhdang> findYhdangList (String hth,String password) throws Exception;
	 
	 public String updateYhdang(String hth,String password) throws Exception;
}

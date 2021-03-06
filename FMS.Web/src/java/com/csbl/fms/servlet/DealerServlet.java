package com.csbl.fms.servlet;

import com.csbl.fms.manager.DealerManager;
import com.csbl.fms.util.Constant;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DealerServlet extends  AbstractServlet implements Constant{


    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException
    {
        manageRequest(req, res);
    }

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException
    {
        manageRequest(req, res);
    }

    private void manageRequest(HttpServletRequest req, HttpServletResponse res) throws IOException
    {
        PrintWriter out = res.getWriter();
        String actionType = null;
        if(req.getParameter("actionType") != null)
        {
            actionType = req.getParameter("actionType").toString();
        }
        DealerManager dealerManager = (DealerManager) appContext.getBean("dealerManager");
        
        if(actionType != null && actionType.equalsIgnoreCase("getDealerListByParentId"))
        {
            String json = dealerManager.getDealerListByParentId();
            out.write(json);
            res.setContentType(CONTENT_TYPE_JSON);
        }
        
        if(actionType != null && actionType.equalsIgnoreCase("dealerDetails"))
        {
            String dealerId = req.getParameter("dealerId");
            String json = dealerManager.getDealerDetails(dealerId);
            //System.out.println(json);
            out.write(json);
            res.setContentType(CONTENT_TYPE_JSON);
        }
        
        out.flush();
        out.close();
    }
	

}

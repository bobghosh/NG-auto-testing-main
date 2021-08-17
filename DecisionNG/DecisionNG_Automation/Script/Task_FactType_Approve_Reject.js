﻿//Paginator code needs to be added

function FactType_Approve_Reject(FactType_Action)
{
//  Input the Fact Type Name along with the Version
//  let FactType_Action = "Name,Approve";

  FactTypeAction = FactType_Action.split(",");
  let FactType = FactTypeAction[0];
  let Action = FactTypeAction[1];
  let flag = 0;
  let hasNext = true;
  
  let Paginator;
    
  if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator").length > 0)
  {
    Paginator = "Yes";
  }
  else
  {
    Paginator = "No";
  }
  
  do
  {   
    
      let FactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
      for(var i = 1; i <= FactTypeList.length ; i++)
      {
        
        let FactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[1]");
        let Status = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[3]");          
        let errorIcon= Aliases.browser.pageSapiensDecision.FindElement("//body//tr["+i+"]//td[5]//dcn-validation-state//div").getAttribute('class')
        Log.Message(Status.textContent)
        Log.Message(errorIcon)
        
       if(FactTypeName.textContent == FactType)
       {   

       
        FactTypeName.HoverMouse();
        
          if(Status.textContent == "CANDIDATE" && errorIcon.includes('icon-validation_success'))
          {      

          
                Log.Message(FactTypeName.textContent)
                
                Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[9]//dcn-approval-lifecycle-actions//dcn-overlay//i").HoverMouse();
        
                Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[9]//button//dcn-approval-lifecycle-actions//dcn-overlay//i").Click();
                
                if(Action == "Approve")
                {
//                  Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Approve']").Click();
                
                  Aliases.browser.pageSapiensDecision.FindElement("//ul//li[1]").Click();
                
                  Delay(200);
                
                  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Submit task to 'COMPLETE'");
  
                  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Approved the Request");
                
                  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
              
                  Delay(1000);    
                  
                  aqObject.CheckProperty(Status, "contentText", cmpEqual, "APPROVED");
                  
               
                  
                  break;
                
                }
                else if(Action == "Reject")
                {
//                  Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Reject']").Click();
                
                  Aliases.browser.pageSapiensDecision.FindElement("//ul//li[1]").Click();
                  Delay(200);
                
                  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Submit task to 'WHITEBOARD'");
  
                  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Approved the Request");
                
                  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton(); 
                  
                  break;               
                  
                }
               
            }
                
          }
      
        }
        
        if(Paginator == "Yes")
        {
          //Click on next page icon
        }
        else(Paginator == "No")
        {
          hasNext = false
        }
        
  }while(hasNext == true)      
      
        

  
}
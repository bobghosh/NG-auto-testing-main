var Facttype_Availablility_Check = require("Facttype_Availablility_Check");
function FactTypeTab_Remove_FT_Verify(FactType, RemoveFT)
{  
  //FactType, RemoveFT
//  let  = "w [V0]";
//  let  = "Yes";
//  let PtableCount = Aliases.browser.PageSapiensDecision.FindElement("//p-table/div").ChildCount;
  let flag = 0;
  let Paginator;
  if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
else
    {
Paginator = "No";
  }

  let hasNext = "true";



  
  do
  {   
      let FactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
      for(var i = 1; i <= FactTypeList.length ; i++)
      {
        let FactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[1]");
//      Log.Message(FactTypeName.textContent)
        if(FactTypeName.textContent.trim() == FactType)
        {  
          let Status = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[3]").textContent;
          let Unused = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[8]").textContent;
      
          Log.Message(Status)
          Log.Message(Unused)
          
          if(Status == "DRAFT" && Unused == "Unused")
          {        
        
            let Button = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[11]/div/span").childElementCount;
            Log.Message(Button);
            if(Button > 0)
            {
                Log.Checkpoint("Remove Button Exists")
                Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[11]").Click();
        
                aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeAreYouSureYouWantToRemov, "contentText", cmpEqual, "Are you sure you want to remove this Fact Type from this task?");

        
                if(RemoveFT == "Yes")
                {
                    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
                              
                }
                else
                {
                    Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();
                }
                
            }
            else
            {
              Log.Error("Remove Button is not available for "+ FactTypeName);
            }
            break;
          }
          else
          {
            let Button = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[11]/div/span").childElementCount;
            Log.Message(Button)
            if(Button >0)
            {
              Log.Message("Button Exists");
            }
            else
            {
              Log.Message("Remove button is not available");
            }
            break;
        
          }
      
        }
    
      }
      
  if(Paginator == "Yes")
  {
    if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
  {
  hasNext = "false";
  }
  else
  {
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();
  }
  }
  else
  {
  hasNext = "false";
  }


     
  }
  while(hasNext == true)
  
  let PtableCount2 = Aliases.browser.PageSapiensDecision.FindElement("//p-table/div").ChildCount;
        
  if(PtableCount2 >1)
  {
    var FirstPage = Aliases.browser.pageSapiensDecision.FindElement("//a[contains(@class,'ui-paginator-first')]");
    FirstPage.click();
  }
  
  Facttype_Availablility_Check.Facttype_Availablility_Check(FactType);
  
  
}
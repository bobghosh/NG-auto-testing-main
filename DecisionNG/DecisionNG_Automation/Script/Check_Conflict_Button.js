function Check_Conflicts_Button(AssetName)
{
  
  Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='"+ AssetName +"')]").Click();
  
  let Check_Conflicts_Button = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Check Conflicts']");
  Check_Conflicts_Button.ClickButton();
  
  let Conflict_Text = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Assets in']//span").textContent;
  let Conflict = Conflict_Text.split(" ");
  Log.Message(Conflict[1]);
  if(Conflict[1] > 0)
  {
    Log.Message("Conflict is present");
    
//    Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Decision Flows')]").Click();
    Delay(2000);
    Resolve_Conflicts(AssetName); 
  }
  else
  {
    Log.Message("Conflict is not present");
  } 
   
}

function Resolve_Conflicts(Asset)
{
  let Conflict_icon = Aliases.browser.pageSapiensDecision2.FindElements("//i[contains(@class,'icon-conflict')]");
  Delay(1000)
    
  if(Conflict_icon.length > 0)
  {
    let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
    for(var i = 1; i <=AssetList.length ;i++)
    {
      if(Asset == "Decision Flows" || Asset == "Decisions")
      {
        let ConflictIcon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+i+"]//td[6]//i");
      }
      else if(Asset == "Rule Families")
      {
        let ConflictIcon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+i+"]//td[7]//i");
        Log.Message(ConflictIcon.length)
      }
      
      if(ConflictIcon.length > 0)
      {
        
          if(Asset == "Decision Flows" || Asset == "Decisions")
          {
            Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[6]//dcn-asset-conflict-indicator//i").Click();  
          }
          else if(Asset == "Rule Families")
          {
            Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[7]//dcn-asset-conflict-indicator//i").Click();        
          }
          
          aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Conflicts");
  
          Conflicted_AssetList = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//tbody//tr//p-checkbox/div/div[2]");
          
          for(var j = 1; j <=Conflicted_AssetList.length ;j++)
          {
            Asset_Checkbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//tbody//tr["+j+"]//p-checkbox/div/div[2]");
          
            if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
            {
              Log.Checkpoint("Checkbox is selected") 
            }
            else
            {
              Asset_Checkbox.click();
              if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
              {
                Log.Checkpoint("Checkbox is selected") 
              }
              else
              {
                Log.Error("Checkbox is not selected")
              }
            }
          }
          
        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
          
      }

    }
  }
  else
  {
    Log.Message("No Conflicts present on current tab");
  }
}
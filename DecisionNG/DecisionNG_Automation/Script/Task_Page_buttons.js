function Send_For_Approval_Button()
{
  let Approval_Button = Aliases.browser.pageSapiensDecision2.FindElement("//p-splitbutton//button[1]");
  
  Log.Message(Approval_Button.Text);
  
  if(Approval_Button.Enabled == true)
  {
     Approval_Button.Click();
     
     Delay(200);
                
     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to");
  
     Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Please Approve the Request");
                
     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
                
     Delay(300);
     
  }
  else
  {
    Log.Error("Button is disabled");
  }
  
}

function Split_button()
{
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();

}

function Discard_or_Reject_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//p-splitbutton//ul//li").Click();

}

function Check_Conflicts_Button()
{
  let Check_Conflicts_Button = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Check Conflicts']");
  Check_Conflicts_Button.ClickButton();
  
  let Conflict_Text = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Assets in']//span").textContent;
  let Conflict = Conflict_Text.split(" ");
  Log.Message(Conflict[1]);
  if(Conflict[1] > 0)
  {
    Log.Message("Conflict is present");
    
    Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Decision Flows')]").Click();
    Resolve_Conflicts();
    
    Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Decisions')]").Click();
    Resolve_Conflicts();
    
    Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Rule Families')]").Click();
    Resolve_Conflicts();     
  }
  else
  {
    Log.Message("Conflict is not present");
  }
  
   
}

function Resolve_Conflicts()
{
  let Conflict_icon = Aliases.browser.pageSapiensDecision2.FindElements("//i[contains(@class,'icon-conflict')]");
    
  if(Conflict_icon.length != 0)
  {
    let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
    for(var i = 1; i <=AssetList.length ;i++)
    {
      let ConflictIcon = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[6]//dcn-asset-conflict-indicator").ChildCount();
      if(ConflictIcon > 0)
      {
          Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[6]//dcn-asset-conflict-indicator//i").Click();  
          
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

function Validation_Button()
{
  let page= Aliases.browser.pageSapiensDecision2
  page.FindElement("//dcn-floating-action-button[@label='Validation']//div[@class='floating-action-button spec-floating-action-button']").Click()
  page.FindElement("//dcn-floating-action-button[@label='Validation']//button").click();
  page.WaitElement(page.FindElement("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span"),10000)
  let validationMessage = page.FindElements("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span");
  let ValidationIcon = Aliases.browser.pageSapiensDecision.FindElement("//div[contains(@class,'decision-sidebar-actions__validation-button')]//div/i");
  let isAssetValid;
  let isAssetInvalid;
  let assetHasWarning;
  
  
  if(ValidationIcon.getAttribute("class").includes("icon-invalid_warning"))
  {
    Log.Checkpoint("Asset has Warnings");
    assetHasWarning =true;
    
  }
  
  else if(ValidationIcon.getAttribute("class").includes("icon-valid"))
  {
    Log.Checkpoint("Asset is Valid");
    isAssetValid = true;
  }
  
  else if(ValidationIcon.getAttribute("class").includes("icon-invalid_error"))
  {
    Log.Error("Asset is InValid");
    isAssetInvalid = true;
  }
  
  for(let i=0; i<validationMessage.length;i++)
  {
    if(isAssetValid == true)
    {
      Log.Checkpoint("Valid Messages: "+validationMessage[i].textcontent); 
    }
    
    else if(assetHasWarning == true)
    {
      Log.Checkpoint("Warning Messages: "+validationMessage[i].textcontent);
    }
    
    else if(isAssetInvalid == true)
    {
      Log.Error("Invalid Messages: "+validationMessage[i].textcontent);
    }
    
  }
  page.FindElement("//dcn-floating-action-button[@label='Validation']//div[contains(@class,'floating-action-button spec-floating-action-button')]").Click()
}

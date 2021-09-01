function Validation_Button()
{
  let page= Aliases.browser.pageSapiensDecision2
  page.FindElement("//dcn-floating-action-button[contains(@class,'validation-button')]/div").Click()
  page.FindElement("//dcn-floating-action-button//button").click();
  page.WaitElement(page.FindElement("//div[contains(@class,'sidebar-container__validation-message ')]//span"),10000)
  let validationMessage = page.FindElements("//div[contains(@class,'sidebar-container__validation-message ')]//span");
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
  page.FindElement("//dcn-floating-action-button[contains(@class,'validation-button')]/div").Click()
}

﻿function Validation_Button()
{
  let page= Aliases.browser.pageSapiensDecision2
  page.FindElement("//dcn-floating-action-button[contains(@class,'validation-button')]/div").Click()
  page.FindElement("//dcn-floating-action-button//button").click();
  //span[contains(@class,'sidebar-container__validation-message ')]//span
  page.WaitElement(page.FindElement("//*[contains(@class,'sidebar-container__validation-message ')]"),10000)
  let validationMessage = page.FindElements("//div[contains(@class,'sidebar-container__validation-message ')]//span");
  let ValidationIcon = Aliases.browser.pageSapiensDecision.FindElement("//div[contains(@class,'decision-sidebar-actions__validation-button')]//div/i");
  let isAssetValid;
  let isAssetInvalid;
  let assetHasWarning;
  
  
  if(ValidationIcon.getAttribute("class").includes("icon-invalid_warning"))
  {
    Log.Warning("Asset has Warnings");
    assetHasWarning =true;
    
  }
  
  else if(ValidationIcon.getAttribute("class").includes("icon-valid"))
  {
    Log.Checkpoint("Asset is Valid");
    var validMessage = page.FindElement("//*[contains(@class,'sidebar-container__validation-message ')]").textContent
    isAssetValid = true;
  }
  
  else if(ValidationIcon.getAttribute("class").includes("icon-invalid_error"))
  {
    Log.Error("Asset is InValid");
    isAssetInvalid = true;
  }
  
  
 if(isAssetValid == true)
  {
    Log.Checkpoint("Valid Messages: "+validMessage); 
  }
  
  else {
    
  for(let i=0; i<validationMessage.length;i++)
  {    
    if(assetHasWarning == true)
    {
      Log.Warning("Warning Messages: "+validationMessage[i].textcontent);
    }
    
    else if(isAssetInvalid == true)
    {
      Log.Error("Invalid Messages: "+validationMessage[i].textcontent);
    }
    
  }
  
  }
  
  page.FindElement("//dcn-floating-action-button[contains(@class,'validation-button')]/div").Click()
}
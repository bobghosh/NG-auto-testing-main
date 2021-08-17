﻿//This Script contains functions for Split button, Start button, Discard button, Send to BOA and Verify, Send to RM and Verify
//Generic code is written for clicking on any button at the place of Start button it will work for all the buttons at that place
//Need to write Script for DPR and Complete

function Split_button()
{
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();

}

function Discard_or_Reject_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//p-splitbutton//ul//li").Click();

}

function Start_button()
{  
  Aliases.browser.pageSapiensDecision.FindElement("//*[(text()='Start')]").Click();
}

function Send_to_BOA()
{
//  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();
  
  let BOA_Button = Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Business Owner Approver')]");
  
  Log.Message(BOA_Button.length);
  
  if(BOA_Button.length>0)
  {
     Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Business Owner Approver')]").Click();
     
     Delay(200);
                
     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to 'Business Owner Approver'");
  
     Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Please Approve the Request");
                
     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
                
     Delay(1000);
     
     //Check for Asset to be sent in Candidate Status
     if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span").textContent == "CANDIDATE")
     {
       Log.Checkpoint("Task is successfully sent to Bussiness Owner Analyst and Status of Task is CANDIDATE");
       
     }
     else
     {
       Log.Error("Task is still with Decision Analyst");
     }
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
  
}

function Send_to_RM()
{
//  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();
  
  let RM_Button = Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Revision Manager')]");
  
  Log.Message(RM_Button.length);
  
  if(RM_Button.length > 0)
  {
    Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Revision Manager')]").Click();
     
     Delay(200);
                
     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to 'Revision Manager'");
  
     Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Please Approve the Request");
                
     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
                
     Delay(300);
     
     //Check for Asset to be sent in Candidate Status
     if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span").textContent == "APPROVED")
     {
       Log.Checkpoint("Task is successfully sent to Revision Manager and Status of Task is APPROVED");
       
     }
     else
     {
       Log.Error("Task is still with Bussiness Owner Approver");
     }
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
  
}

//Generic Approval Button without any specific Role
//function Send_For_Approval_Button()
//{
//  let Approval_Button = Aliases.browser.pageSapiensDecision2.FindElement("//p-splitbutton//button[1]");
//  
//  Log.Message(Approval_Button.Text);
//  
//  if(Approval_Button.Enabled == true)
//  {
//     Approval_Button.Click();
//     
//     Delay(200);
//                
//     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to");
//  
//     Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Please Approve the Request");
//                
//     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
//                
//     Delay(300);
//     
//  }
//  else
//  {
//    Log.Error("Button is disabled");
//  }
//  
//}

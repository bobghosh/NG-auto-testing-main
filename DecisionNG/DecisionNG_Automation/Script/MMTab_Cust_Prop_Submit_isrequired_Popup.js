function Cust_Prop_Submit_isrequired_Popup()
{
    //Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]//*[contains(text(),"+"'"+""+FactTypeDataToCompare+""+"'"+")]"),10000);
   //KeywordTests.FactTypeSummary_MMTab_SubmitforApproval.Run();
    let page= Aliases.browser.pageSapiensDecision2 
    if(Aliases.browser.pageSapiensDecision2.WaitElement(Aliases.browser.pageSapiensDecision2.FindElement("//mat-dialog-container//h1[text()=' Submit For Approval ']"), 5000))
    {
        var Popup_Message = page.FindElement("//mat-dialog-container//*[@class='dialog-body__bullets__header u-margin-bottom--full spec-dialog-body__bullets__header']").textContent
        var Elements= Aliases.browser.pageSapiensDecision2.FindElements("//*[@class='dialog-body__bullets spec-dialog-body__bullets']//dcn-bullet//div//span");
        Log.Message(Elements.length)
        Log.Message(Popup_Message);
        for(i=0; i<Elements.length; i++)
        {
          Log.Message(Elements[i].textContent);
  
        }
      let browser = Aliases.browser;
      browser.pageSapiensDecision.form.buttonOk.ClickButton();
    }
    else
    Log.Message("Pop up does not exist")
    
    
      
}

function test()
{
    var element = Aliases.browser.pageSapiensDecision2.formF.label.panel10;  // Obtain the web element
    var style = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element, "");
    let backgroundcolor=style.background
    if(backgroundcolor == "rgb(74, 207, 246) none repeat scroll 0% 0% / auto padding-box border-box")
    {
      Log.Message("It is checked")
    }
    else if(backgroundcolor == "rgb(221, 221, 221) none repeat scroll 0% 0% / auto padding-box border-box")
    {
      Log.Message("It is not checked")
    }
    
   let paginationdrpdwn= Aliases.browser.pageSapiensDecision.FindElement("//p-dropdown//label")
   Log.Message(paginationdrpdwn.textContent);
   if(paginationdrpdwn.Exists)
   {
   if(paginationdrpdwn.textContent<'50')
   {
      Aliases.browser.pageSapiensDecision.FindElement(".ui-dropdown-trigger").Click();
      Aliases.browser.pageSapiensDecision.FindElement("//li[contains(., '100')]").Click();
      Log.Message("Pagination is set to 100")
   }
   else
   {
     Log.Message("Pagination is greater then or equal to 50")
   }
   }
}
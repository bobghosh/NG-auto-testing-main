﻿function Search_Click()
{
  Aliases.browser.pageSapiensDecision.FindElement("//i[@class='icon-search icon']").Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel42, "Exists", cmpEqual, true);

//  aqObject.CheckProperty(page.formF.labelQuickSearch, "contentText", cmpEqual, "Quick Search");  
  
  
}



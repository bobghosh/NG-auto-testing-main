function Enable_Editing_FT(){
  
  let page =Aliases.browser.pageSapiensDecision2;
page.FindElement("//a[text()='Enable Editing']").click();
Delay(1000);
page.WaitElement(page.FindElement("//div[contains(@class,'fact-type-form-laundry-line')]//span[contains(@class,'label--draft')]"));
}
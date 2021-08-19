var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
function Message_Catagory_Remove_Column(category)
{
  let page= Aliases.browser.pageSapiensDecision2
  let catagoryColumn= page.FindElement("//div//span[contains(text(),'"+category+"')]")
  catagoryColumn.ClickR();
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown("Remove")
  page.FindElement("//button[text()=' Remove ']").Click();
}
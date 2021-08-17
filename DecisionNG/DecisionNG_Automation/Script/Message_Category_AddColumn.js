var rightClickOnElementAndSelect = require("RightClickOnElement_Select");
function Message_Category_AddColumn(MessageCategory)
{
     let page = Aliases.browser.pageSapiensDecision2;
     rightClickOnElementAndSelect.rightClickOnElementAndSelect("//div[contains(@class,'conclusionHeader')]", "Add Message Category");
     page.FindElement("//dcn-autocomplete//input[@placeholder='category name']").keys(MessageCategory);
     page.FindElement("//dcn-autocomplete//input[@placeholder='category name']").keys('[Tab]');
}
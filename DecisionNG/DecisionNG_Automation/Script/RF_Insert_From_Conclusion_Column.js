var RF_ConclusionColumn_Options = require("RF_ConclusionColumn_Options");
var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");
function Insert_Column_From_Conclusion_Column(ColumnName)
{
//  let ColumnName = "Vars098 ";

  //Right Click on Conclusion Column and Select Insert Column
  Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'conclusionHeader')]").ClickR(27, 14);
  RF_ConclusionColumn_Options.ConclusionColumn_Options("Insert Column");
  
  //Control passes over Placeholder to input Column Name/Fact Type Name
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click(); 
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(ColumnName);
  
  //Select Existing Fact Type or Create New
  let DropdownValue = "Create New Fact Type '" + ColumnName +"'";
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(DropdownValue, "No");  

}
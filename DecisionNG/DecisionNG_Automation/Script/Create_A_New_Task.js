//USEUNIT SelectingOptionfromDropDown_Only1DDexsists
function Create_A_New_Task(Community, TaskName, ModelingProjectName, AssetApprovalProcess, FactTypeApprovalProcess)
{
   let timestamp = new Date();
   let Num = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
  Aliases.browser.pageSapiensDecision.StartNewDecisionDropButton.Click();
  Aliases.browser.pageSapiensDecision2.textnode2.textnodeStartANewTask.linkStartANewTask.textnodeStartANewTask2.Click();
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='community']//button").Click();
  //Aliases.browser.pageSapiensDecision.form.form2.form4.button2.ClickButton();
  SelectingOptionfromDropdown(Community, "No");
  //Aliases.browser.pageSapiensDecision2.formF.textboxSorName.Click();
  Aliases.browser.pageSapiensDecision2.formF.textboxSorName.SetText(TaskName+Num);
  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("TaskDesc");
  Aliases.browser.pageSapiensDecision2.formF.button4.ClickButton();
  //Aliases.browser.pageSapiensDecision.panel3.Click();
  SelectingOptionfromDropdown(ModelingProjectName,"NO");
  Aliases.browser.pageSapiensDecision2.formF.button5.ClickButton();
  //Aliases.browser.pageSapiensDecision2.panel6.Click();
  SelectingOptionfromDropdown(AssetApprovalProcess,"NO");
  Aliases.browser.pageSapiensDecision2.formF.button6.ClickButton();
  //Aliases.browser.pageSapiensDecision.panel12.Click();
  SelectingOptionfromDropdown(FactTypeApprovalProcess,"NO");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.buttonCancel, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.formF.buttonCreateStart, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.buttonOk, "Enabled", cmpEqual, true);
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  Aliases.browser.pageSapiensDecision.panel15.Click();
}
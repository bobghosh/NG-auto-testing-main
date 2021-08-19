//USEUNIT SelectingOptionfromDropDown_Role
function Create_A_New_Task(Community, TaskName, ModelingProjectName, AssetApprovalProcess, FactTypeApprovalProcess)
{
   let page = Aliases.browser.pageSapiensDecision2
   let timestamp = new Date();
   let Num = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
   
  Aliases.browser.pageSapiensDecision.StartNewDecisionDropButton.Click();
  
  page.textnode2.textnodeStartANewTask.linkStartANewTask.textnodeStartANewTask2.Click();
  
  let communityButton=page.FindElement("//dcn-combo-box[@name='community']//button");
  
  communityButton.WaitProperty("disabled",false,3000);
  
  communityButton.Click();
  
  SelectingOptionfromDropdown(Community, "No");
  
  page.FindElement("//input[@name='taskName']").SetText(TaskName+Num);
  
  Project.Variables.NewTaskName = TaskName+Num;
  
  Log.Message("Printing the NewTask Created "+Project.Variables.NewTaskName)
  
  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
  
  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("TaskDesc");
  
  page.formF.button4.ClickButton();
  
  SelectingOptionfromDropdown(ModelingProjectName,"NO");
  
  page.formF.button5.ClickButton();
  
  SelectingOptionfromDropdown(AssetApprovalProcess,"NO");
  page.formF.button6.ClickButton();
  
  
  SelectingOptionfromDropdown(FactTypeApprovalProcess,"NO");
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.buttonCancel, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.formF.buttonCreateStart, "Enabled", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//button[contains(text(), 'Create & Open')]"), "Enabled", cmpEqual, true);
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(text(), 'Create & Open')]").ClickButton();
  Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.panel15,20000);
  Aliases.browser.pageSapiensDecision.panel15.Click();
}
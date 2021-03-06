let browser = Aliases.browser;
function CreateTask_CancelButton()
{
  browser.pageSapiensDecision.form.buttonCancel.ClickButton();
}
function CreateTask_Create_and_Start_Button()
{
    Create_and_Start_VerifyEnabled();
    let page = browser.pageSapiensDecision2;
    page.formF.buttonCreateStart.ClickButton();
    aqObject.CheckProperty(page.form6.panel21, "Exists", cmpEqual, true);

}
function CreateTask_Create_and_Open_Button()
{
  let page = browser.pageSapiensDecision;
  page.form.buttonOk.ClickButton();
  aqObject.CheckProperty(page.buttonSendToGlossary, "Exists", cmpEqual, true);
}

function Create_and_Start_VerifyDisabled()
{
 
 if(Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Create & Start']//parent::button").hasAttribute('disabled')==true)
 {
  Log.Checkpoint("Create & Start is Disabled");
 }
 else
 {
   Log.Error("Create & Start is Not Disabled");
 }
}
function Create_and_Start_VerifyEnabled()
{
 
 if(Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Create & Start']//parent::button").hasAttribute('disabled')==false)
 {
  Log.Checkpoint("Create & Start is Enabled");
 }
 else
 {
   Log.Error("Create & Start is Not Enabled");
 }
}
function Create_and_Open_VerifyEnabled()
{
  if(Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Create & Open ']//parent::button").hasAttribute('disabled')==false)
 {
  Log.Checkpoint("Create & Open is Enabled");
 }
 else
 {
   Log.Error("Create & Open is Not Enabled");
 }
}
function Create_and_Open_VerifyDisabled()
{
  if(Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Create & Open ']//parent::button").hasAttribute('disabled')==true)
 {
  Log.Checkpoint("Create & Open is Disabled");
 }
 else
 {
   Log.Error("Create & Open is Not Disabled");
 }
}
var page = Aliases.browser.pageSapiensDecision2;
var bimPleateBtn= page.FindElement("//dcn-floating-action-button/div[contains(@class,'decision-sidebar-actions decision-sidebar-actions__bim-button floating-button__bim')]");

function BIM_Plete_Open_EditIcon_Click()
{
  bimPleateBtn.Click()
  page.WaitElement(page.FindElement("//dcn-bim-tree-panel//button"),4000);
  page.FindElement("//dcn-bim-tree-panel//button").Click();
  page.WaitElement(page.FindElement("//dcn-edit-bim-tree//h1"),4000);
  aqObject.CheckProperty(page.FindElement("//dcn-edit-bim-tree//h1"), "contentText", cmpEqual, "Edit");
}

function BIM_Ok_Btn()
{
  page.FindElement("//dcn-edit-bim-tree//button[text()=' OK ']").Click();
  Delay(2000);
}

function BIM_Cancel_Btn()
{
  page.FindElement("//dcn-edit-bim-tree//button[text()=' Cancel ']").Click();
}

function BIM_Plete_Close()
{
  bimPleateBtn.Click();
}

function BIM_Add_Child()
{
  let bimAddChindBtns = page.FindElements("//*[@class='action-buttons element-shown-on-hover']/button");
  bimAddChindBtns[3].click();
  page.FindElement("//input[@name='editItem']").SetText("Child001");
  editBimOkBtn();
  
}

var editBimOkBtn = ()=>
{
  return bimOkBtn= page.FindElement("//button[@class='edit-confirm-spec']").click();
}

var editBimCancelBtn= ()=>
{
  return bimCancelBtn = page.FindElement("//i[@class='icon-fail']/parent::button").click();
}

function BIM_DragAndDropFT()
{
  let Source="Policy Discount"
  let Destination="Child0012"
  let sourceRG = page.FindElement("//mat-dialog-container//span[text()='"+Source+"']");
  let destinationRG = page.FindElement("//dcn-edit-bim-tree//span[text()='"+Destination+"']");
  page.Drag() 
  
}

function Delete_BIM_Child()
{
  let childRGCloseIcon= page.FindElement("//*[contains(text(),'child1')]/parent::div/parent::div/child::div[2]//i[@class='icon-close']");
  childRGCloseIcon.click();
}

function Edit_BIMChild()
{
  let childRGEditIcon = page.FindElement("//*[contains(text(),'child1')]/parent::div/parent::div/child::div[2]//i[@class='icon-edit']");
  childRGEditIcon.Click();
  page.FindElement("//input[@name='editItem']").SetText("Child0012");
  editBimOkBtn();
}


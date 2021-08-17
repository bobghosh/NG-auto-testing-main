function Community_VG_Folder_Select(SelectOption,Community_VG_Folder_Name)
{
  let page= Aliases.browser.pageSapiensDecision2
  //let Community = page.FindElement("//*[@role='treeitem']//span[text()="+"'"+""+Community_VG_Folder_Name+""+"'"+"]")
  if(SelectOption == 'Community')
  {
    let community= page.FindElement("//*[@role='treeitem']//span[text()="+"'"+""+Community_VG_Folder_Name+""+"'"+"]//parent::span/i[@class='icon-community']")
    community.Click();
  }
  
  else
  {
   let vgFolder = page.FindElement("//*[@role='treeitem']//span[text()="+"'"+""+Community_VG_Folder_Name+""+"'"+"]//parent::span/i[@class='icon-viewgroup']")
    vgFolder.click();
  }
  
  
}
var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");
function Verify_Model_Definition()
{
 
  let VersionTab = Aliases.browser.pageSapiensDecision2.linkVersions.textnode8;  
  let Version = "Yes";
  let CreateClone = "No";
  
  if(Version == "Yes")
  {
    if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
    {
      VersionTab.click();
    }
    
    let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//tbody//tr//td[1]/div/div");
    
    for(let i = 1; i <=VersionCount.length; i++)
    {
      let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+ i +"]//td[1]/div/div[1]");
      Log.Message(VersionName.textContent);
      
      if(VersionName.textContent == "1.0.0_Copy_#4")
      {
        if(CreateClone == "Yes")
        {
          VersionName.HoverMouse();
          Aliases.browser.pageSapiensDecision2.FindElement("//tbody/tr["+i+"]/td[3]/div/dcn-button-menu/div/div").click();
          Aliases.browser.pageSapiensDecision2.FindElement("//body/div["+i+"]/p-contextmenusub[1]/ul[1]/li[1]/a[1]").click()
        }
      }
    }    
    
  }
  
  
  
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.linkCustomProperties.textnode10;
  let CustomProperty = "Yes";
  let AddCP = "Yes";
  if(CustomProperty == "Yes")
  {
    if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
    {
      CustomPropertiesTab.click();
    }
    
    if(AddCP == "Yes")
    {
      
    }
  }
  

}
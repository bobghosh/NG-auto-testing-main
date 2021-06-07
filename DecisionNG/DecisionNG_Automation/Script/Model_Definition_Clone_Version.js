var Model_Definition_Version_Availability_Check = require("Model_Definition_Version_Availability_Check");
function Model_Definition_Clone_Version(Version, NewVersion)
{  
    //let NewVersion = Version + "_Copy_#1";    
    
    let VersionTab = Aliases.browser.pageSapiensDecision2.linkVersions.textnode8;  
    if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
    {
      VersionTab.click();
    }
    
    let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//dcn-model-definition-versions//tr");
    Log.Message(VersionCount.length);
    
    for(let i = 1; i <=VersionCount.length; i++)
    {
      let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-definition-versions//tr["+i+"]//td[1]");
      Log.Message(VersionName.textContent);
      
      if(VersionName.textContent == Version)
      {              
          VersionName.HoverMouse();
          //Click on Ellipses
          Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-definition-versions//tr["+i+"]//td[3]//dcn-button-menu").HoverMouse();
         
          Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-definition-versions//tr["+i+"]//td[3]//dcn-button-menu").click();
          
          Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Clone']").click() 
         
         break;
      }      
        
    } 
    
    Delay(500);
    
    Model_Definition_Version_Availability_Check.Model_Definition_Version_Availability_Check(NewVersion);         

}

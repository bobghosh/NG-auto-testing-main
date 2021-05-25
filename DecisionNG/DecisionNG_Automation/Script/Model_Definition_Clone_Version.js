function Model_Definition_Clone_Version()
{  
    let Version = "1.0.0_Copy_#1_Copy_#1";
    let CreateClone = "Yes";
    let NewVersion = Version + "_Copy_#1";    
    
    let VersionTab = Aliases.browser.pageSapiensDecision2.linkVersions.textnode8;  
    if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
    {
      VersionTab.click();
    }
    
    let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//tbody//tr//td[1]/div/div");
    Log.Message(VersionCount.length);
    
    for(let i = 1; i <=VersionCount.length; i++)
    {
      let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+ i +"]//td[1]/div/div[1]");
      Log.Message(VersionName.textContent);
      
      if(VersionName.textContent == Version)
      {              
          VersionName.HoverMouse();
          //Click on Ellipses
          Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+i+"]//td[3]//dcn-button-menu").HoverMouse();
         
          Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+i+"]//td[3]//dcn-button-menu").click();
          
         //style="visibility: visible; display: block; left: 339px; top: 321px; z-index: 1016; opacity: 1;"

          //Click on Clone
          //Aliases.browser.pageSapiensDecision2.FindElement("//body//div[contains(@class,'ui-contextmenu')]["+i+"]//ul//span[text()='Clone']").click() 
         Aliases.browser.pageSapiensDecision2.FindElement("//body//div[contains(@style,'display: block')]//ul//span[text()='Clone']").click() 
         
         break;
      }      
        
    } 
    
    Delay(500);
    
    let NewVersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//tbody//tr//td[1]/div/div");
    Log.Message(NewVersionCount.length);
    
    for(let j = 1; j <= NewVersionCount.length; j++)
    {
      let NewVersionName = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+ j +"]//td[1]/div/div[1]");
      Log.Message(NewVersionName.textContent);
      
      if(NewVersionName.textContent == NewVersion)
      {              
          Log.Message(NewVersion + " has been created");
          
          break;
      } 
        
    }          

}

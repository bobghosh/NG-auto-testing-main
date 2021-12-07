function AI_Expand_Icon_Click_Verify()
{let AssetNames ="asset1,asset2"
    var page =  Aliases.browser.pageSapiensDecision2;
    AssetName = AssetNames.toString().split(",");
    for(let i=0;i<AssetName.length;i++)
    {    
        Plus_Minus_Icon = page.FindElement("//*[text()="+"'"+""+AssetName[i]+""+"'"+"]//ancestor::dcn-additional-info//div[contains(@class,'item__expander-icon--wrapper')]//i")
        
        let className = Plus_Minus_Icon.getAttribute('class')
    
        if(className.includes("icon-link_plus"))
        {
          Plus_Minus_Icon.Click();
      
          let classNameAfterClick = Plus_Minus_Icon.getAttribute('class')
      
          {
      
            if(classNameAfterClick.includes("icon-link_minus"))
              {
                Log.Checkpoint("Icon is Expanded Successfully");
              }
        
            else if(classNameAfterClick.includes("icon-link_plus"))
              {
                Log.Error("Icon is not Expanded")
              }
        
          }
        }
        else if(classNameAfterClick.includes("icon-link_minus"))
            {
              Log.Warning("Icon is already Expanded no action needed");
            }
    }
}
function Community_Expand_Verify(CommunityName)
{
  let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+CommunityName+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
  if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-right'))
  {
    Log.Checkpoint("Community is Collapsed");
    Expand_Collapse_Icon.Click();
    if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-down'))
      {
        Log.Checkpoint("Community is expanded successfully");
      }
      else
      {
        Log.Error("Community is not Expanded");
      }
  }
  else
    {
      Log.warning("Community is already Expanded");
    }
  
}

//Expand ViewGroup Function
function ViewGroup_Expand_Verify(VGName)
{
  let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+VGName+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
  if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-right'))     
  {
    Log.Checkpoint("View Group is Collapsed");
    Expand_Collapse_Icon.Click();
    if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-down'))
      {
        Log.Checkpoint("View Group is expanded successfully");
      }
      else
      {
        Log.Error("View Group is not Expanded");
      }
  }
  else
    {
      Log.warning("View Group is already Expanded");
    }
  
}
function Community_Collapse_Verify(CommunityName)
{
  let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+CommunityName+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
  if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-down'))
  {
    Log.Checkpoint("Community is Expanded");
    Expand_Collapse_Icon.Click();
    if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-right'))
      {
        Log.Checkpoint("Community is Collapsed successfully");
      }
      else
      {
        Log.Error("Community is not collapsed successfully");
      }
  }
  else
    {
      Log.warning("Community is already Collapsed");
    }
  
}

//ViewGroup Collapse Function
function ViewGroup_Collapse_Verify(VGName)
{
  let Expand_Collapse_Icon = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()="+"'"+""+VGName+""+"'"+"]//ancestor::span/parent::div/span[contains(@class,'ui-tree-toggler pi pi-fw ui-unselectable-text')]")
  if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-down'))
  {
    Log.Checkpoint("ViewGroup is Expanded");
    Expand_Collapse_Icon.Click();
    if(Expand_Collapse_Icon.getAttribute('class').includes('pi-caret-right'))
      {
        Log.Checkpoint("ViewGroup is Collapsed successfully");
      }
      else
      {
        Log.Error("ViewGroup is not collapsed successfully");
      }
  }
  else
    {
      Log.warning("ViewGroup is already Collapsed");
    }
  
}
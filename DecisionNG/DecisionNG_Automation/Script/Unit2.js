function test()
{
  let page= Aliases.browser.pageSapiensDecision2
  let child = page.FindElement("//*[@class='valid-value-combobox-spec']//div/div/div").ChildCount
  Log.Message(child)
}
function Perform_Click_On_Element(Element)
{
  let page = Aliases.browser.pageSapiensDecision
  page.FindElement(Element).Click();
}
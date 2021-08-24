function test()
{
  let a= Aliases.browser.pageSapiensDecision2.FindElements("//dcn-edit-bim-tree//span[text()='Child1']//ancestor::li[1]/ul//p-treenode//*[@role='treeitem']")
  for (let i=0; i<a.length ;i++)
  {
    Log.Message(a[i].textContent);
  }
}

function DecisionScreen_Enable_Editing(Name)
{

  OCR.Recognize(Aliases.browser.pageSapiensDecision2.canvas).BlockByText(Name).ClickNextTo(toBottom, 20)
  let x= Sys.Desktop.MouseX
  let y = Sys.Desktop.MouseY-90;
  Log.Message(x)
  Log.Message(y)
  //Aliases.browser.pageSapiensDecision2.Click(x,y);
  OCR.Recognize(Aliases.browser.pageSapiensDecision2.canvas).BlockByText('Enable Editing').ClickNextTo(toBottom, 2)
  
}
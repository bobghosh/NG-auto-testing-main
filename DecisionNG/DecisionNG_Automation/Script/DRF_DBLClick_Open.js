function DRF_DBClick_Open(DRFName)
{

  OCR.Recognize(Aliases.browser.pageSapiensDecision2.canvas).BlockByText(DRFName).ClickNextTo(toBottom, 20)
  let x= Sys.Desktop.MouseX
  let y = Sys.Desktop.MouseY-40;
  Log.Message(x)
  Log.Message(y)
  Aliases.browser.pageSapiensDecision2.DblClick(x,y);

}
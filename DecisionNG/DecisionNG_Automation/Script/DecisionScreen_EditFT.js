﻿var SelectingOptionfromDropdown = require("SelectingOptionfromDropdown_UL_LI");

function GetTextBlockCustom(anObject, FTName)
{

  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 0)
  {

    for (var i = 0; i < obj.BlockCount; i ++)
    {
      var re = new RegExp(FTName);
      Log.Message(re)
      Matches = obj.Block(i).Text.match(re);
      if (Matches != null)
      {
        
        return obj.Block(i);
      }

    }

  return null;
  }
  else
    return null;

}

function DecisionScreen_EditFT(FacttypeName)
{

  var obj = Aliases.browser.pageSapiensDecision2.canvas;


  var b = GetTextBlockCustom(obj,FacttypeName);
  if (b != null)
  {
    b.ClickR();
    SelectingOptionfromDropdown.SelectingOptionfromDropdown("Open Fact Type Summary","No");
  }

}
module.exports.DecisionScreen_EditFT = DecisionScreen_EditFT;
var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
var SelectingOptionfromDropDown_MultipleSelection = require("SelectingOptionfromDropDown_MultipleSelection");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");

function Enter_TestcaseValues(FTName)
{
  var placeHolder
  var page = Aliases.browser.pageSapiensDecision2;
  let factTypeNames = page.FindElements("//dcn-testing-view-model-list//fx-field//label");  
  
  Log.Message("Names:"+factTypeNames.length);

  for(let i=0;i<factTypeNames.length;i++)
  {
    let factTypeNamesText = factTypeNames[i].textContent.trim()
      
    if(factTypeNamesText == FTName)
    {
      let factTypeValuefeild = page.FindElements("//dcn-testing-view-model-list//fx-field//div//span//input");
      let classText = factTypeValuefeild[i].getAttribute('class');
      placeHolder = factTypeValuefeild[i].getAttribute('placeholder')
      Log.Message(classText,placeHolder);
      
      if(classText == 'wj-form-control')
      {
        if(placeHolder == "M/d/yyyy" || placeHolder == "M/yyyy")
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingDateFromCalendar.CalendarSelection("No","2020","Jan","12")
        }
        
        else if(placeHolder == "M/d/yyyy h:mm a")
        {
           page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button[1]").Click();
           SelectingDateFromCalendar.CalendarSelection('No','1999','Jan','12')
           page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button[2]").Click();
           SelectingTimeFromDropDown.SelectingTimeFromDropdown('3:45 AM','No')
           
        }
        
        else if(placeHolder == "click to select")
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingOptionfromDropDown_MultipleSelection.SelectingOptionfromDropdown_Multiselect('10 Year Warranty,Final Certificate of Occupancy','No')
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
        }
        
        else
        {
          page.FindElement("//dcn-testing-view-model-list//div["+(i+3)+"][@data-sid]//button").Click();
          SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("10 Year Warranty","No");
        }
        
         
      }
      else
      {
        factTypeValuefeild[i].keys("^a[BS]");
        factTypeValuefeild[i].keys("2");
        factTypeValuefeild[i].keys(['Tab']);
      }
      break;     
    }
    
  }
  
}

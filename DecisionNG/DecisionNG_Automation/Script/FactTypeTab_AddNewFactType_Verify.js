﻿var GenerateRandomNumber = require("GenerateRandomNumber");
var Generate_Random_Number = require("Generate_Random_Number");
var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
//var SelectingOptionfromDropDown= require("SelectingOptionfromDropDown_Only1DDexsists");
var Picture_To_Log = require("Picture_To_Log");

  var SelectingDateFromCalendar = require("SelectingDateFromCalendar");


  function Tasks_Create_New_FactType()
  {
   
    Project.Variables.Create_New_FactType.Reset();
    // Ceate New FactType using Add FT button
    for(; !Project.Variables.Create_New_FactType.IsEOF();)
  
    { 
      
      if(Project.Variables.Create_New_FactType.Value("Flag")=="Yes")
      {
        var FactType_Name = GenerateRandomNumber.get4DigitRandomInt();
//      var timestamp = new Date();
//      var FactType_Name = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
      //Starting point  of a testcase
      aqTestCase.Begin(Project.Variables.Create_New_FactType.Value("TestCase Name"));
   
      Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
    
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//h1[contains(text(), 'Fact Type Summary:')]"), "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("CheckPoint FT Summary"));
    
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//*[@class='fact-type-form ng-star-inserted']//span"), "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("Status"));
    
      Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
    
      Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name);
      //Delay(2000);
      
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.panel5, "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("FT Summary after FT entry")+" "+FactType_Name);
      Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
    
      Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys(Project.Variables.Create_New_FactType.Value("Description"));
   
      //Checks the input if user wants to select Single Input or Multiple Input Enters the loops if its Single Value.
      if(Project.Variables.Create_New_FactType.Value("List Indicator") == "Single Value")
      {
      Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeSingleValue.Click();
      }
      //Checks the input if user wants to select Single or Multiple List Indicator Enters the loops if its Multiple Value.
      else 
      {
        Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeMultipleValues.Click();
      }
    
     
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='dataType']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Create_New_FactType.Value("Data Type"),"No")

      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='displayFormat']//button").Click();
      
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Create_New_FactType.Value("Display Format"),"No")
      
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='allowedValues']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Create_New_FactType.Value("Allowed Values "),"No")
      
    

      //If Allowed Values is Range then enters the loop and enter the set of range values 
      if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Range")
        {
            Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          
          if(Project.Variables.Create_New_FactType.Value("Data Type")=="Date")
          {
            SelectingDateFromCalendar.CalendarSelection();
                                
          }
          else if(Project.Variables.Create_New_FactType.Value("Data Type").includes('Day')||Project.Variables.Create_New_FactType.Value("Data Type").includes('Month'))
          {
            Log.Message("Range set loop'else if day  loop'")
            Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
            // Delay(1000);
            var str = Project.Variables.Create_New_FactType.Value("SetValues");
            var setValues = str.split(',');     
            for(var i = 0; i < setValues.length ; i++) 
            { 
                let rangeData = setValues[i].split('-');
                let fromData=rangeData[0];
                let toData=rangeData[1];
                Log.Message("fromdata is"+fromData)
                Log.Message("to data is"+toData)    
                let browser = Aliases.browser;
                let page = browser.pageSapiensDecision;
                let button = page.form.form2.form4;
                page.FindElement("//dcn-domain-input[@placeholder='from']//button").Click()
                //button.button10.ClickButton();
                SelectingOptionfromDropDown.SelectingOptionfromDropdown(fromData,"No");
                page = browser.pageSapiensDecision2;
                page.FindElement("//dcn-domain-input[@placeholder='to']//button").Click()
               //page.formF.form2.button3.ClickButton();
                SelectingOptionfromDropDown.SelectingOptionfromDropdown(toData,"No");
                
                Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]").Click();           
                          
            }
        
          }
        else
        {
          Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          // Delay(1000);
          var str = Project.Variables.Create_New_FactType.Value("SetValues");
          var setValues = str.split(',');     
            for(var i = 0; i < setValues.length ; i++) 
            { 
              var rangeData = setValues[i].split('-');
              var fromData=rangeData[0];
              var toData=rangeData[1];          
     
              Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").Click();
              
              //Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").Click();
              
              Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").SetText(fromData);
              
              // Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").SetText(fromData);
              Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").Click();
     
              Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").SetText(toData);
  
               //Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").Click();
     
               //Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").SetText(toData);
      
              Aliases.browser.pageSapiensDecision.FindElement("//dcn-range-list-editor/div/button") .ClickButton();
              
              //Aliases.browser.pageSapiensDecision.FindElement("//dcn-range-list-editor/div/button") .ClickButton();
              
            }
        }
          
        }
        //If Allowed Values is Regular set then enters the loop and enter the set of values 
        else if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Regular set")
        {
          Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          
          if(Project.Variables.Create_New_FactType.Value("Data Type")=="Date")
          {
            SelectingDateFromCalendar.CalendarSelection();
                                
          }
          else if(Project.Variables.Create_New_FactType.Value("Data Type").includes("Day")||Project.Variables.Create_New_FactType.Value("Data Type").includes("Month"))
          {
            Log.Message("Regular set loop'else if day  loop'")
            var str = Project.Variables.Create_New_FactType.Value("SetValues");
            var str_array = str.split(',');
            for(var i = 0; i < str_array.length; i++) 
              { 
                SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],'Yes');
                Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]"),5000)
                 Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]").Click();
                           
              }
        
          }
          else
          { 
            //Log.Message("Regular Set Normal loop'else loop'")
        Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
       // Delay(2000);
        var str = Project.Variables.Create_New_FactType.Value("SetValues");
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        { 
          
        Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
      
        Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(str_array[i]);
        
        Delay(2000)
     
        Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]"),5000)
        Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]").Click();
        }
        }
     
        }
        //If Allowed Values is Dynamic set then enters the loop and enter the set of values
        else if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Dynamic set")
        {
        Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          
          if(Project.Variables.Create_New_FactType.Value("Data Type")=="Date")
          {
            SelectingDateFromCalendar.CalendarSelection();
                                
          }
          else if(Project.Variables.Create_New_FactType.Value("Data Type").includes("Day")||Project.Variables.Create_New_FactType.Value("Data Type").includes("Month"))
          {
            Log.Message("Regular set loop'else if day  loop'")
            var str = Project.Variables.Create_New_FactType.Value("SetValues");
            var str_array = str.split(',');
            for(var i = 0; i < str_array.length; i++) 
              { 
                SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],'Yes');
                Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]"),5000)
                 Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]").Click();
                           
              }
        
          }  
        else
        {
           Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
       // Delay(2000)
        
        //Split the input data using comma's
        var str = Project.Variables.Create_New_FactType.Value("SetValues");
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        { 
        
          Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
          
          Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(str_array[i]);
          
          Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]"),5000)
          Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'add-btn')]").Click();
          
        }
        
        }
        }
        //clicking on Ok button after entering the data in add new FT feild
          Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
      
        //Validating new FactType Created
        let FactTypeDataToCompare=Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name+" "+"[V0]"+" ";
        
        Log.Message(FactTypeDataToCompare);
        
        //Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]").WaitElement(FactTypeDataToCompare,4000);
        
        Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]//*[contains(text(),"+"'"+""+FactTypeDataToCompare+""+"'"+")]"),10000);
        let FactTypeNameAfterCreation= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]").textContent;
        
        Log.Message(FactTypeNameAfterCreation);
        
     
        if (FactTypeNameAfterCreation == FactTypeDataToCompare )
        {
         
        Log.Checkpoint("FactType Created Successfully with the name "+FactTypeNameAfterCreation);
        }
      
        else
        {
          Log.Error("FactType Name is not matching with the created FT Name data")
        }
      
        let NewFTStatus= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[3]").textContent;
      
        if (NewFTStatus == Project.Variables.Create_New_FactType.Value("Status"))
        {
        Log.Checkpoint("FactType Created Successfully with the Status "+NewFTStatus);
        }
      
        else
        {
          Log.Error("FactType Status is missing");
        }
    
        let UnusedFTCheck= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[8]").textContent;
      
        if (UnusedFTCheck == "Unused")
        {
        Log.Checkpoint("FactType Created Successfully & the FT is Unused "+UnusedFTCheck);
        }
      
        else
        {
          Log.Error("Unused field for this FactType is Empty");
        }
        //Delay(2000)
       let errorIcon= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[6]//dcn-validation-state//div").getAttribute('class')
        Log.Message(errorIcon)
        if(errorIcon.includes('icon-validation_error')) 
        {

        Log.Checkpoint("Facttype is Invalid");
      
        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[1]").Click();
        
        let FTSummaryErrorMessage=Aliases.browser.pageSapiensDecision.form.form2.panel10.textContent;
       
        Log.Checkpoint("Facttype is not valid. Error: " +FTSummaryErrorMessage);
      
        let browser = Aliases.browser;
        let page = browser.pageSapiensDecision;
        let textbox = page.form;
        let textbox2 = textbox.form2;
        let textbox3 = textbox2.form3;
      
        aqObject.CheckProperty(textbox3.textboxName, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name);
      
        aqObject.CheckProperty(textbox3.textareaDescription, "value", cmpEqual, Project.Variables.Create_New_FactType.Value("Description"));
      
        textbox3 = textbox2.form4;
        aqObject.CheckProperty(textbox3.textbox, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Data Type") );
      
        aqObject.CheckProperty(textbox3.textbox2, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Display Format"));
      
        aqObject.CheckProperty(textbox3.textbox3, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Allowed Values "));
      
        //textbox.buttonCancel.ClickButton();
    
        textbox.buttonOk.ClickButton();
       
        }
        else 
        {
      
        Log.Checkpoint("FactType Is valid");
      
        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[1]").Click();
      
        let browser = Aliases.browser;
        let page = browser.pageSapiensDecision;
        let textbox = page.form;
        let textbox2 = textbox.form2;
        let textbox3 = textbox2.form3;
      
        aqObject.CheckProperty(textbox3.textboxName, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name);
      
        aqObject.CheckProperty(textbox3.textareaDescription, "value", cmpEqual, Project.Variables.Create_New_FactType.Value("Description"));
      
        textbox3 = textbox2.form4;
      
        aqObject.CheckProperty(textbox3.textbox, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Data Type") );
      
      
        aqObject.CheckProperty(textbox3.textbox2, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Display Format"));
      
        aqObject.CheckProperty(textbox3.textbox3, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Allowed Values "));
        
        //textbox.buttonCancel.ClickButton();
    
        textbox.buttonOk.ClickButton();
         
        }
        }
      
  
        //Open FactType and Verify the data and error if any
        aqTestCase.End();
    
       Project.Variables.Create_New_FactType.Next();
 
  
    }
    }

    
  

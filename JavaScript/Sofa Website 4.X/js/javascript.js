        var redSofa = document.getElementById('redRadioBtn');
        var blueSofa = document.getElementById('blueRadioBtn');
        var orangeSofa = document.getElementById('orangeRadioBtn');
        var greenSofa = document.getElementById('greenRadioBtn');
        var SubmitColor = document.getElementById('submit-color-btn');

         var btn1 = document.getElementById('btn-1');
         var btn2 = document.getElementById('btn-2');
         var btn3 = document.getElementById('btn-3');

        var sofa = document.getElementById('SofaImage');
   
        
        

        var chosenDesignField = document.getElementById('DesignTextBox');

    function checkChosenColor() {  	
		
    	if(redSofa.checked){
    		alert("Red Sofa Chosen");
    	}

    	else if (blueSofa.checked){
    		alert("Blue Sofa Chosen");

    	}

    	else if (orangeSofa.checked){
    		alert("Orange Sofa Chosen");
    	}

    	else if (greenSofa.checked) {
    		alert("Green Sofa Checked");
    	}  	    		
    	
    }

    function pictureChange1()
    {              

        sofa.src = "images/sofa1.jpg";
        chosenDesignField.value = 'Design 1 Chosen';
       
   
       
            
    }
     function pictureChange2()
    {              

        sofa.src = "images/sofa2.jpg";
        chosenDesignField.value = 'Design 2 Chosen';
   
       
            
    }

 function pictureChange3()
    {              

        sofa.src = "images/sofa3.jpg";
        chosenDesignField.value = 'Design 3 Chosen';
   
       
            
    }



    	
/**
 * Created by Ksu on 01.08.2016.
 */
$(document).ready(function() {
    //carousel for comments
    var leftEl = $('.carousel-arrow-left');
    var rightEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 250;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 2) * pixelsOffset);
    var maximumOffset = 0;

    leftEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 250;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 250;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    //validation of name
    $('#Name').on('blur',function(){
        var inputName = $('#Name').val();
        var regName = /^([A-Za-z\s]+)$/;
        var true_name = regName.test(inputName);
        if(true_name==false) {
            console.log("It's not correct name!")
        }
    });
    //validation of telephone
    $("#teleph").mask("+38(999)999-99-99");

    //validation of mail
    $('#Email').on('blur',function(){
        var inputMail = $('#Email').val();
        var regMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.(a-z\.a-z)$/;
        var true_mail = regMail.test(inputMail);
        if(true_mail==false) {
            console.log("It's not correct mail! Please enter again")
        }
    });
    //validation of company
    $('#company').on('blur',function(){
        var inputName = $('#company').val();
        var regName = /^([A-Za-z0-9\s]+)$/;
        var true_name = regName.test(inputName);
        if(true_name==false) {
            console.log("It's not correct company name!")
        }
    });

});
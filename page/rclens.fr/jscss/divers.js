// Cache adresses mails

 function genadresse( utilisateur ) {    
    var domain = "rclens";           // indiquez ici le nom de votre domaine
   var pays  ="fr";                    // fr, com, be, ch
    var atsign = String.fromCharCode(64);  // c'est le signe @
    var point  = String.fromCharCode(46);  // c'est le "." point
    var adr =  utilisateur + atsign + domain + point + pays;
    document.write(
    "<" + "a" + " " + "href=" + "ma" +String.fromCharCode(105) + "lto" +String.fromCharCode(58) + adr +">" + adr + "");
  }

  
// Afficher la date
navvers = navigator.appVersion.substring(0,1);
if (navvers > 3)
	navok = true;
else
	navok = false;

today = new Date;
jour = today.getDay();
numero = today.getDate();
if (numero<10)
	numero = "0"+numero;
mois = today.getMonth();
if (navok)
	annee = today.getFullYear();
else
	annee = today.getYear();
TabJour = new Array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi");
TabMois = new Array("janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre");
messageDate = TabJour[jour] + " " + numero + " " + TabMois[mois] + " " + annee;


// JavaScript pour le overlay des vidéos
$(function() {
	// setup overlay actions to buttons
	$("a[rel]").overlay({		
		// setup exposing (optional operation);
		onBeforeLoad: function() {
			//this.expose();
			this.getBackgroundImage().expose({color: '#000'}); // choix de la couleur du masque
		},		
		onLoad: function(content) {
			// find the player contained inside this overlay and load it
			this.getContent().find("a.player").flowplayer(0).load();
		},		
		onClose: function(content) {
			$f().unload();
			// close exposing
			$.expose.close();
		}
	});
	// installe flowplayer
	$("a.player").flowplayer("/jscss/flowplayer.commercial-3.1.2.swf", {
		key: '$67ae278688707743862',
		contextMenu: [  
        'RC Lens Video player 1.0.0',  
        {'Proceed to next demo': function() { 
            location.href = 'large-logo.html'; 
        }} 
		],
		// canvas coloring and custom gradient setting
		canvas: {backgroundColor: 'transparent'},
		plugins:  {
	
		// default controls with the same background color as the page background
			controls:  {				
				url: '/jscss/flowplayer.controls-3.1.2.swf',
				backgroundColor: '#880000',
	      		timeColor: '#ff0000',
	      		durationColor: '#ffffff',
      			buttonColor: '#222222',
      			buttonOverColor: '#555555',
      			progressColor: '#bb0000',
      			bufferColor: '#550000',
	      		sliderColor: '#222222',
      			progressGradient: 'medium',
      			bufferGradient: 'none',
	     		sliderGradient: 'none',
				backgroundGradient: 'none',
		   	  	opacity:1.0,
	      		borderRadius: '0px',
				stop: true
			},			
			 adswizz : {
			  url: "/jscss/AdswizzVIP-Flowplayer-3.2.0.swf",
			  server: "ads.stickyadstv.com", // required
			  loadTimeout: 3000, // default 3000
			  ads: {
			    prerollZoneId: 3388, // default -1
			    midrollZoneId: -1, // default -1
			    postrollZoneId: 3390, // default -1
			    midrollInterval: -1, // default -1
			    midrollDelay: -1 // default -1
			    },
			  tags: { // defaults to none
			    keyword: "RCLens",
			    tag: "Menu"
			    },
			  adTimeDisplay: {
			    text: "Publicité affichée pendant [time] seccondes", // defaults to none, i.e. not displayed
			    align: "BL", // one of BL, BR, TL, TR, defaults to BL
			    x: 10, // pixel offset from the above alignment point, defaults to 10
			    y: 30, // pixel offset from the above alignment point, defaults to 30
			    textColor: "ffffff" // hex value for colour styling, defaults to ffffff, i.e. white
			    }
			  }
		}
		 
	});	
		
});	

// ***********************************************************************
// Fade Menu
// ***********************************************************************

$(function () {
        if ($.browser.msie && $.browser.version < 7) return;
        
        $('#fadeMenu li')
            .removeClass('highlight')
            .find('a')
            .append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        // on hover
                        $span.stop().fadeTo(500, 1);
                    }, function () {
                        // off hover
                        $span.stop().fadeTo(500, 0);
                    });
                });  
		$('#btFond li')
            .removeClass('highlight')
            .find('a')
            .append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        // on hover
                        $span.stop().fadeTo(500, 1);
                    }, function () {
                        // off hover
                        $span.stop().fadeTo(500, 0);
                    });
                });    
		$('#btPrehome li')
            .removeClass('highlight')
            .find('a')
            .append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        // on hover
                        $span.stop().fadeTo(500, 1);
                    }, function () {
                        // off hover
                        $span.stop().fadeTo(500, 0);
                    });
                });
		$('.fadeFiche li')
            .removeClass('highlight')
            .find('a')
            .append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        // on hover
                        $span.stop().fadeTo(500, 1);
                    }, function () {
                        // off hover
                        $span.stop().fadeTo(500, 0);
                    });
                });       
		$('.fadeMenumatchs li')
            .removeClass('highlight')
            .find('a')
            .append('<span class="hover" />').each(function () {
                    var $span = $('> span.hover', this).css('opacity', 0);
                    $(this).hover(function () {
                        // on hover
                        $span.stop().fadeTo(500, 1);
                    }, function () {
                        // off hover
                        $span.stop().fadeTo(500, 0);
                    });
                });
    });

// ***********************************************************************
// Ajaxisation de pages
// ***********************************************************************
/* Fonction chargement ajax avec animation, vous pouvez modifier la vitesse (slow, fast, 1500, ...) et l'effet (slideUp, fadeOut, slideDown...) */
function ajax_page_advanced(ele,msg,url){
        $(ele).slideUp("slow", function(){
                $(ele).html(msg).show("slow", function(){
                        $(ele).load(url+" "+ele, null, function(){
                                var tampon = $(ele).html();
                                $(ele).html(msg).hide("slow",function(){
                                        $(ele).html(tampon);
                                        $(ele).slideDown("slow");
                                });
                        });
                });
        });
}
/* Fonction de chargement ajax simple */
function ajax_page(ele,msg,url){
        $(ele).html(msg).load(url+" "+ele);
}

/* Une fois la page chargée */
$(document).ready(function(){
        //Application du chargement ajax simple sur tous les liens se trouvant dans le conteneur "menu1"
        $(".ajaxise a").click(function(){
                ajax_page_advanced('#colPage','<p style="text-align: center"><br />Chargement de la page...<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>',this.href);
                return false;
        });
});

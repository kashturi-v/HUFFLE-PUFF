/**
 * In this game “Huffle-Puff”, we will use functions,
 * if statements, animations, variables and many more.
 * Players must  reach a destination which is marked by
 * a star, using arrow keys to guide their “Puff” up,
 * down, left,  or right. Once the player has reached
 * the star, they will advance onto the next stage. 
 * Last modified: June 7th 2015
 * Author: Kashturi, Mansi and Nirusha
 */

var playerX=0;
var playerY=0;
var playerY2=83;
var playerY3=83;
var stage=1;
var lineX =0;
var lineY =0;
var titlePositionY=200;
var titlePositionX=133;
var titlePositionX2=133;
var titlePositionY2=200;
var titlePositionX3=133;
var titlePositionY3=200;
var titlePositionX4=133;
var titlePositionY4=200;
var titlePositionX5=133;
var titlePositionY5=200;
var titlePositionX6=133;
var titlePositionY6=200;
var titlePositionX7=133;
var titlePositionY7=200;
var titlePositionX8=133;
var titlePositionY8=200;
var titlePositionX9=133;
var titlePositionY9=200;
var destinationX=351;
var destinationY=230;
var destinationX2=2;
var destinationY2=330;
var destinationY3=129;
var destinationX3=303;
var destinationY4=331;
var destinationX4=303;
var destinationX5=0;
var destinationY5=332;
var destinationX6=0;
var destinationY6=-21;
var destinationX7=250;
var destinationY7=179;
var destinationX8=350;
var destinationY8=79;
var destination= getImage("cute/Star");
var player= getImage("avatars/mr-pink");// option to change character
var water=getImage("cute/WaterBlock");
var waterX2= 304;
var waterY2= 343;
var waterSplash= getSound("rpg/water-bubble");
var portalX=0;
var portalY=0;
var portalDestinationX=0;
var portalDestinationY=0;
var cannonX=251;
var cannonY=199;
var cannonX2=214;
var cannonY2=199;
var bulletX=175;
var bulletY=25;
var bulletX2=70;
var bulletY2=325;
var bulletX3=75;
var bulletY3=25;
var bulletX4=75;
var bulletY4=25;
var bulletX5=75;
var bulletY5=25;
var bulletX6=75;
var bulletY6=25;
var bulletX7=22;
var bulletY7=325;
var bulletX8=70;
var bulletY8=325;
var bulletX9=75;
var bulletY9=325;
var bulletX10=70;
var bulletY10=325;
var bulletX11=75;
var bulletY11=25;
var bulletX12=70;
var bulletY12=325;
var bulletX13=70;
var bulletY13=325;
var bulletX14=70;
var bulletY14=325;
var bulletX15=75;
var bulletY15=325;
var bulletX16=75;
var bulletY16=175;
var bulletX17=75;
var bulletY17=1755;
var bulletX18=75;
var bulletY18=25;
var bulletX19=75;
var bulletY19=25;
var bulletX20=70;
var bulletY20=325;
var bulletX21=70;
var bulletY21=325;
var bulletX22=75;
var bulletY22=25;

var draw= function() {
    background(0, 0, 0); //change background
    stroke(255, 0, 0);// change stroke
    //involvement of arrow keys
    keyPressed= function(){
        if (keyPressed&&keyCode===DOWN){
           playerY+=50; //change the number, depending on the scale  
           playSound(getSound("retro/hit1"));
        }
        if (keyPressed&&keyCode===UP){
            playerY-=50; //change the number, depending on the scale
            playSound(getSound("retro/hit1"));
        }
        if (keyPressed&&keyCode===LEFT){
            playerX-=50;
            playSound(getSound("retro/hit1"));
        }
        if(keyPressed&&keyCode===RIGHT){
            playerX+=50;
            playSound(getSound("retro/hit1"));
        }
        
        
        if(stage<0){
            stage+=1;
        }
        if(stage>=500&&keyPressed&&keyCode===ENTER){
                stage=1;
        
    
            titlePositionY=200;
            playerX=0;
            playerY=0;
        }

    };

//background if statements for player
    if(playerX<0){
        playerX+=50;
    }
    if(playerX>350){
        playerX-=50;
    }        
    if(playerY<0){
        playerY+=50;
    }
    if(playerY>350){
        playerY-=50;
    }
//background grid
    fill(10, 9, 10);
    if(stage>1&&stage<=10){
    //lines that are verticle
        stroke(43, 42, 43);
        line(lineX-50,lineY,lineX-50,400);
        line(lineX,lineY,lineX,400);
        line(lineX+50,lineY,lineX+50,400);
        line(lineX+100,lineY,lineX+100,400);
        line(lineX+150,lineY,lineX+150,400);
        line(lineX+200,lineY,lineX+200,400);
        line(lineX+250,lineY,lineX+250,400);
        line(lineX+300,lineY,lineX+300,400);
        line(lineX+350,lineY,lineX+350,400);
    // lines that are horizontal lines
        line(lineX-50,lineY+50,400,lineY+50);
        line(lineX-50,lineY+100,400,lineY+100);
        line(lineX-50,lineY+150,400,lineY+150);
        line(lineX-50,lineY+200,400,lineY+200);
        line(lineX-50,lineY+250,400,lineY+250);
        line(lineX-50,lineY+300,400,lineY+300);
        line(lineX-50,lineY+350,400,lineY+350);
    }

    if (stage ===1){
        
        var font= createFont("broadway");// if we want we can change the title
        textFont(font,45);
        stroke(227, 53, 53);
        fill(0, 0, 0);
        rect(118,163,154,48);
        rect(43,243,320,48);
        fill(227, 53, 53);
        text("H   FFLE-P   FF",37,87,413,50);
        textSize(30);
        text("START",141,173,400,50);
        image(player,70,playerY2,40,40);
        image(player,273,playerY3,40,40);
       
     
        text("INSTRUCTIONS",80,255,400,50);
        // DO SCENE 3 INSTRUCTION
        playerY2-=1;
        playerY3-=1.2;
        if(playerY2<=60){
            playerY2=83;
            
            
        }
        if(playerY3<=60){
            playerY3=83;
            
            
        }
    }    
    
/*******STAGES*********/
 
    if (stage ===2){
        fill(227, 53, 53);
        //stage name
        text("STAGE 1",titlePositionX,titlePositionY,300,50);
        //star location
        image(destination,destinationX, destinationY,49,76);
        
        fill(42, 191, 156);
        
        
        titlePositionY-=1.5;
        if(stage===2&&playerX===350&&playerY===250){
        stage++;
        playSound(getSound("rpg/coin-jingle"));
        }
    }
    //water is introduced     
    if(stage===3){
        //star location
        image(destination,destinationX2, destinationY2,49,76);
        //water
        image(water,waterX2-252,waterY2-315,50,73);
        image(water,waterX2-252,waterY2-279,50,73);
        image(water,waterX2-252,waterY2-245,50,73);
        image(water,waterX2-252,waterY2-210,50,73);
        image(water,waterX2-252,waterY2-173,50,73);
        image(water,waterX2-252,waterY2-138,50,73);
        image(water,waterX2-252,waterY2-103,50,73);
        image(water,waterX2-252,waterY2-67,50,73);
        image(water,waterX2-252,waterY2-32,50,73);
        image(water,waterX2-252,waterY2-0,50,73);
        
        image(water,waterX2-1,waterY2-315,50,73);
        image(water,waterX2-1,waterY2-279,50,73);
        image(water,waterX2-1,waterY2-246,50,73);
        image(water,waterX2-1,waterY2-210,50,73);
        image(water,waterX2-1,waterY2-173,50,73);
        image(water,waterX2-1,waterY2-138,50,73);
        image(water,waterX2-1,waterY2-103,50,73);
        image(water,waterX2-1,waterY2-67,50,73);
        image(water,waterX2-1,waterY2-32,50,73);
        image(water,waterX2-1,waterY2-0,50,73);
        
        image(water,waterX2-203,waterY2-315,50,73);
        image(water,waterX2-153,waterY2-315,50,73);
        image(water,waterX2-103,waterY2-315,50,73);
        image(water,waterX2-53,waterY2-315,52,73);
        //stage name
        fill(227, 53, 53);
        text("STAGE 2",titlePositionX2,titlePositionY2,300,50);
        titlePositionY2-=1.5;
        
        
        if(stage===3&&playerX===0&&playerY===350){
            stage++;
            playSound(getSound("rpg/coin-jingle"));
        }
        //death
        if(stage===3&&playerX>=50&&playerX<=300&&playerY>=50){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
    }
    if(stage===4){
        //star location 
        image(destination,destinationX3, destinationY3,49,76);
        //water
        image(water,waterX2+-303,waterY2-366,50,83);
        image(water,waterX2+-303,waterY2-326,50,81);
        
        image(water,waterX2+-205,waterY2-315,52,71);
        image(water,waterX2+-155,waterY2-315,50,71);
        image(water,waterX2+-105,waterY2-315,51,71);
        image(water,waterX2+-55,waterY2-315,51,71);
        image(water,waterX2+-55,waterY2-285,51,88);
        image(water,waterX2+-5,waterY2-315,49,71);
        image(water,waterX2+-55,waterY2-240,51,80);
        image(water,waterX2+-55,waterY2-206,51,64);
        image(water,waterX2+-303,waterY2-217,50,92);
        image(water,waterX2+-303,waterY2-169,50,81);
        image(water,waterX2+-303,waterY2-130,50,81);
        image(water,waterX2+-303,waterY2-91,50,81);
        image(water,waterX2+-303,waterY2-51,50,56);
        
        image(water,waterX2+50,waterY2-217,50,92);
        image(water,waterX2+50,waterY2-168,50,81);
        image(water,waterX2+50,waterY2-127,50,81);
        image(water,waterX2+50,waterY2-87,50,81);
        image(water,waterX2+50,waterY2-46,50,67);
        image(water,waterX2+50,waterY2-18,50,89);
        image(water,waterX2+-253,waterY2-170,50,93);
        image(water,waterX2+-253,waterY2-119,50,74);
        image(water,waterX2+-3,waterY2-170,55,86);
        image(water,waterX2+-3,waterY2-129,55,86);
        image(water,waterX2+-102,waterY2-117,48,74);
        image(water,waterX2+-148,waterY2-169,45,93);
        image(water,waterX2+-148,waterY2-117,47,74);
        image(water,waterX2+-203,waterY2-170,56,93);
        image(water,waterX2+-203,waterY2-118,56,74);
        image(water,waterX2+-7,waterY2-17,57,86);
        image(water,waterX2+-205,waterY2-17,51,86);
        image(water,waterX2+-155,waterY2-17,51,86);
        image(water,waterX2+-108,waterY2-17,51,86);
        image(water,waterX2+-58,waterY2-17,51,86);
        
        fill(227, 53, 53);
        //stage name
        text("STAGE 3",titlePositionX3,titlePositionY3+14,300,50); 
        titlePositionY3-=1.5;
        
        //deaths
        if(stage===4&&playerX>=0&&playerX<50&&playerY>=0&&playerY<100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=0&&playerX<50&&playerY>=200&&playerY<350){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=50&&playerX<200&&playerY>=200&&playerY<250){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=50&&playerX<250&&playerY>=250&&playerY<300){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=100&&playerX<350&&playerY>=450&&playerY<500){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=150&&playerX<350&&playerY>=50&&playerY<100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=250&&playerX<300&&playerY>=100&&playerY<200){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=400&&playerX<450&&playerY>=150&&playerY<340){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=300&&playerX<350&&playerY>=200&&playerY<300){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=0&&playerX<50&&playerY>=150&&playerY<200){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=350&&playerX<400&&playerY>=150&&playerY<200){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX>=100&&playerY===350){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&playerX===350&&playerY>=150){
            stage+=498;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===4&&playerX===100&&playerY===50){
            stage+=498;
             playSound(getSound("rpg/water-bubble"));
        }
        //advancement to next stage
        if(stage===4&&playerX===300&&playerY===150){
            stage++;
            playSound(getSound("rpg/coin-jingle"));
        }
    
    }
    //teleports introduced
    if (stage === 5){
        //star location
        image(destination,destinationX4, destinationY4,49,76);
        
        //water
        image(water,waterX2+-153,waterY2-366,51,83); //Player x = 150&200
        image(water,waterX2+-153,waterY2-326,51,81);
        image(water,waterX2+-102,waterY2-366,51,83);
        image(water,waterX2+-102,waterY2-327,52,83);
        
        image(water,waterX2+-4,waterY2-317,50,81);    // PlayerX=300
        image(water,waterX2+-4,waterY2-279,50,84);
        
        image(water,waterX2+-4,waterY2-168,50,92); // PlayerX=>250 PlayerY=>200
        image(water,waterX2+-4,waterY2-122,50,90);  
        image(water,waterX2+-4,waterY2-75,50,82); 
        image(water,waterX2+46,waterY2-17,50,82); 
        
        image(water,waterX2+-55,waterY2-214,50,72); // PlayerX=<300 & PlayerY=150
        image(water,waterX2+-104,waterY2-214,49,72);
        image(water,waterX2+-153,waterY2-214,49,72);
        image(water,waterX2+-51,waterY2-315,49,71);
        image(water,waterX2+-252,waterY2-218,49,94);
        
        image(water,waterX2+-253,waterY2-369,49,85);// PlayerX=50
        image(water,waterX2+-253,waterY2-329,49,84);
        
        image(water,waterX2+-252,waterY2-170,49,93); // PlayerX=100
        image(water,waterX2+-252,waterY2-125,49,98);
        image(water,waterX2+-252,waterY2-69,49,76);
        image(water,waterX2+-203,waterY2-66,52,73);
        image(water,waterX2+-304,waterY2-66,52,73);
        
        image(water,waterX2+-152,waterY2-120,49,92); // PlayerX=>100
        image(water,waterX2+-152,waterY2-69,49,76);
        image(water,waterX2+-103,waterY2-113,49,68);
        image(water,waterX2+-53,waterY2-113,49,68);
        
        fill(24, 32, 82);
        stroke(24, 32, 82);
        rect(portalX, portalY, 50,50);
        rect(portalDestinationX, portalDestinationY+350, 50,50);
        
        if(stage===5&&playerX===350&&playerY===300){
            playerX-=100;
            playerY-=100;
            playSound(getSound("rpg/battle-spell"));
        }
        
        rect(portalX+350, portalY+300, 50,50); // 1st Portal Destination
        rect(portalDestinationX+250, portalDestinationY+200, 48,48);// 2nd Portal Destination
        if(stage===5&&playerX===0&&playerY===0){
            playerY+=350;
            playSound(getSound("rpg/battle-spell"));
        }
        
        
        fill(227, 53, 53); // Stage Name
        text("STAGE 4",titlePositionX4,titlePositionY4,300,50);
         titlePositionY4-=1.5;
        //advancement to next stage
        if(stage===5&&playerX===300&&playerY===350){
        stage++;
        
        playSound(getSound("rpg/coin-jingle"));
        
        } 
        //deaths
        if(stage===5&&playerX>=50&&playerX<100&&playerY>=0&&playerY<100){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=50&&playerX<100&&playerY>=150&&playerY<300){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=0&&playerX<200&&playerY>=300&&playerY<350){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=150&&playerX<300&&playerY>=250&&playerY<300){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=300&&playerX<350&&playerY>=200&&playerY<350){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=50&&playerX<100&&playerY>=0&&playerY<100){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=150&&playerX<250&&playerY>=0&&playerY<100){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=250&&playerX<350&&playerY>=50&&playerY<100){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=300&&playerX<350&&playerY>=100&&playerY<150){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=300&&playerX<350&&playerY>=200&&playerY<350){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX>=350&&playerX<400&&playerY>=350&&playerY<400){
            stage+=499;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX===150&&playerY===150){
            stage+=498;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX===200&&playerY===150){
            stage+=498;
             playSound(getSound("rpg/water-bubble"));
        }
        if(stage===5&&playerX===250&&playerY===150){
            stage+=498;
             playSound(getSound("rpg/water-bubble"));
        }
    }   
    //cannons and bullets introduced
    if (stage===6){
        //star location
        image(destination, destinationX5, destinationY5, 49,76);
        //water
        image(water,waterX2+-253,waterY2-328,49,119);
        image(water,waterX2+-253,waterY2-262,49,87);
        image(water,waterX2+-253,waterY2-219,49,87);
        image(water,waterX2+-253,waterY2-178,49,87);
        image(water,waterX2+-253,waterY2-147,49,87);
        image(water,waterX2+-253,waterY2-105,49,87);
        image(water,waterX2+-253,waterY2-62,49,87);
        image(water,waterX2+-253,waterY2-18,49,87);
        
        
        image(water,waterX2+-204,waterY2-169,49,77);
        image(water,waterX2+-54,waterY2-169,53,77);
        image(water,waterX2+-103,waterY2-169,49,77);
        image(water,waterX2+-1,waterY2-169,49,77);
        //bullets
        stroke(255, 255, 255);
        strokeWeight(2);
        line(bulletX2,bulletY2,bulletX2+5,bulletY2);
        bulletX2-=1.25;
        if(bulletX2<=-10){
            bulletX2=75;
        }
        if(stage===6&&playerY===300&&bulletX2>=playerX&& bulletX2<=playerX+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        //cannons
        stroke(112, 112, 112);
        fill(112, 112, 112);
        rect(cannonX-102, cannonY+2, 50,49);
        rect(163,196,22,40);
        
        rect(cannonX-102, cannonY+-198, 50,49);
        rect(163,15,22,40);
        rect(cannonX-200, cannonY+104, 48,49);
        rect(45,315,40,22);
        
        stroke(255, 255, 255);
        fill(252, 252, 252);
        line(bulletX, bulletY, bulletX, bulletY+10);
        bulletY+=4.5;
        if(bulletY>=231){
            bulletY=25;
        }
        if(stage===6&&playerX===150&& bulletY>=playerY&&bulletY<=playerY+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
       
        stroke(112, 112, 112);
        fill(112, 112, 112);
        // Cannons (6)
        rect(cannonX-102, cannonY+2, 50,49);
        rect(163,196,22,40);
        rect(cannonX-102, cannonY+-198, 50,49);
        rect(163,15,22,40);
        
        // If Statments - Stage 6 
        if(stage===6&&playerX===50&&playerY>=50&&playerY<=250){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===6&&playerX===50&playerY===350){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===6&&playerX>=100&playerX<=300&&playerY===200){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===6&&playerX===150&playerY===200){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===6&&playerX===50&&playerY===300){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===6&&playerX===150&&playerY===0){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        //advancement to next stage
        if(playerX===0&& playerY===350){
            stage++;
            playSound(getSound("rpg/coin-jingle"));
        }
        
        fill(227, 53, 53); // Stage Name
        text("STAGE 5",titlePositionX5,titlePositionY5,300,50);
        titlePositionY5-=1.5;
        
    }
    
    if(stage===7){
        
        image(destination, destinationX6, destinationY6,49,76); // Location of Star
        //bullets
        stroke(255, 255, 255);
        line(bulletX4+50, bulletY4, bulletX4+50, bulletY4+10); 
        bulletY4+=8;
        line(bulletX5+150, bulletY5, bulletX5+150, bulletY5+10); 
        bulletY5+=5.50;
        line(bulletX6+250, bulletY6, bulletX6+250, bulletY6+10); 
        bulletY6+=7;
        
        line(bulletX7,bulletY7,bulletX7+5,bulletY7);
        bulletX7+=5.25;
        line(bulletX8,bulletY8-100,bulletX8+5,bulletY8-100);
        bulletX8+=6.10;
        line(bulletX9,bulletY9-200,bulletX9+5,bulletY9-200);
        bulletX9+=7.25;    
        //if statements for bullets
        if(bulletY4>=400){
        bulletY4=25;
        }
        if(bulletY5>=400){
            bulletY5=25;
        }
        if(bulletY6>=400){
            bulletY6=25;
        }
        if(bulletX7>=400){
            bulletX7=25;
        }
        if(bulletX8>=400){
            bulletX8=25;
        }
        if(bulletX9>=400){
            bulletX9=25;
        }    
        
        if(stage===7&&playerX===100&&bulletY4>=playerY&&bulletY4<=playerY+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===7&&playerX===200&&bulletY5>=playerY&&bulletY5<=playerY+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===7&&playerX===300&&bulletY6>=playerY&&bulletY6<=playerY+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===7&&playerY===300&&bulletX7>=playerX&& bulletX7<=playerX+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===7&&playerY===200&&bulletX8>=playerX&& bulletX8<=playerX+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===7&&playerY===100&&bulletX9>=playerX&& bulletX9<=playerX+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        
        // Cannon Shapes + Locations
        stroke(112, 112, 112);
        fill(112, 112, 112);
        rect(cannonX2-213, cannonY2+101, 48,49); 
        rect(15,313,40,22);
        rect(cannonX2+138, cannonY2+101, 48,49);
        rect(346,313,40,22);
        
        rect(cannonX2-213, cannonY2+2, 48,49);
        rect(15,214,40,22);
        rect(cannonX2+138, cannonY2+2, 48,49);
        rect(346,214,40,22);
        
        rect(cannonX2-213, cannonY2+-98, 48,49);
        rect(15,115,40,22);
        rect(cannonX2+138, cannonY2+-98, 48,49);
        rect(346,115,40,22);
        
        rect(cannonX2-112, cannonY2+-200, 50,49);
        rect(117,14,22,40);
        
        rect(cannonX2-14, cannonY2+-200, 50,49);
        rect(215,14,22,40);
        
        rect(cannonX2+87, cannonY2+-200, 50,49);
        rect(314,14,22,40);
        
        image(water,waterX2+-253,waterY2-371,51,97); // Water Blocks
        image(water,waterX2+-253,waterY2-315,51,71);
        //teleporters
        fill(24, 32, 82);
        stroke(24, 32, 82);
        rect(portalX, portalY+50, 50,50);  // 1st Teleporter Location
        rect(portalDestinationX+350, portalDestinationY+50, 50,50); // 2nd Teleporter Location
        
        // If Statments - Stage 7 
        if(stage===7&&playerX===0&&playerY===300){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===7&&playerX===0&&playerY===200){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===7&&playerX===0&&playerY===100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===7&&playerX===50&&playerY<=50){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===7&&playerX===100&&playerY===0||playerX===200&&playerY===0||playerX===300&&playerY===0){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===7&&playerX===350&&playerY===100){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===7&&playerX===350&&playerY===200){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===7&&playerX===350&&playerY===300){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===7&&playerX===350&&playerY===50){
            playerX=0;
            playerY=50;
            playSound(getSound("rpg/battle-spell"));
        }
        //advancement to next stage
        if(stage===7&&playerX===0&&playerY===0){
            stage++;
            playSound(getSound("rpg/coin-jingle"));
        }
        
        fill(227, 53, 53); // Stage Name
        text("STAGE 6",titlePositionX6,titlePositionY6,300,50);
        titlePositionY6-=1.5;
        
    }
    if(stage===8){
        
        rect(portalX, portalY+50, 50,50);  // 1st Teleporter Location
        rect(portalDestinationX+350, portalDestinationY+0, 50,50); // 2nd Teleporter Location
        //death
        if(stage===8&&playerX===150&&playerY===0){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===8&&playerX===150&&playerY===100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===8&&playerX===150&&playerY===150){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
            
        }
        if(stage===8&&playerX>=250&&playerY<=150){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
            
        }
        if(stage===8&&playerX===250&&playerY===250){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
            
        }
        if(stage===8&&playerX===0&&playerY===350){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
            
        }   
        if(stage===8&&playerX===100&&playerY===100){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===8&&playerX===0&&playerY>=200&&playerY<=300){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===8&&playerX===200&&playerY>=200&&playerY<=300){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===8&&playerX===250&&playerY===300){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===8&&playerX===50&&playerY===100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===8&&playerX===0&&playerY===100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));
        }
        if(stage===8&&playerX>=250&&playerY===150){
            stage+=498;
            playSound(getSound("rpg/step-heavy"));
        }
        if(stage===8&&playerX===250&&playerY===200){
            stage++;
            playSound(getSound("rpg/coin-jingle"));
        }
        
        image(destination, destinationX7, destinationY7,49,76); // Location of Star
        image(water,waterX2+-153,waterY2-370,51,76); //Player X = 150
        image(water,waterX2+-53,waterY2-367,51,81); //Player X = 250
        image(water,waterX2+-53,waterY2-332,51,99); //Player X = 250 & Y = 50
        image(water,waterX2+-53,waterY2-285,51,102); //Player X = 250 & Y = 100
        image(water,waterX2+-53,waterY2-230,50,86); //Player X = 250 & Y = 150
        image(water,waterX2+-305,waterY2-268,51,91); //Player Y = 100
        image(water,waterX2+-254,waterY2-268,51,91); //Player Y = 100
        image(water,waterX2+-305,waterY2-219,51,83); //Player Y = 100
    
        
        image(water,waterX2+-153,waterY2-268,51,86); //Player X = 100 & Y = 150
        image(water,waterX2+-102,waterY2-225,49,81); //Player X = 200 & Y = 150
        image(water,waterX2+-153,waterY2-225,51,81); //Player X = 150 & Y = 200
        image(water,waterX2+-54,waterY2-116,51,73); //Player X&Y = 250
        
        image(water,waterX2+-306,waterY2-15,51,77); //Player Y = 350 
        
        stroke(255, 255, 255);
        line(bulletX12,bulletY12-100,bulletX12+5,bulletY12-100);// -Bullet- 
        bulletX12-=2;
        line(bulletX13,bulletY13-50,bulletX13+5,bulletY13-50);// -Bullet- 
        bulletX13+=3;
        line(bulletX14,bulletY14-0,bulletX14+5,bulletY14-0);// -Bullet- 
        bulletX14-=3.5;
        
        line(bulletX11+50, bulletY11, bulletX11+50, bulletY11+10); // -Bullet- 
        bulletY11-=2.5;
        line(bulletX15+200, bulletY15, bulletX15+200, bulletY15+10); // -Bullet-
        bulletY15+=0.75;
        line(bulletX16+250, bulletY16, bulletX16+250, bulletY16+10); // -Bullet- 
        bulletY16+=2;
        line(bulletX17+300, bulletY17, bulletX17+300, bulletY17+10); // -Bullet-
        bulletY17+=0.5;    
        
        if(bulletX10<=-45){
            bulletX10=100;
        }
        if(bulletX12<=-10){
            bulletX12=200;
        }
        if(bulletX13>=200){
            bulletX13=0;
        }
        if(bulletX14<=-0){
            bulletX14=200;
        }
        if(bulletY11<=-25){
            bulletY11=100;
        } 
        if(bulletY15>=500){
            bulletY15=350;
        }
        if(bulletY16>=445){
            bulletY16=150;
        }
        if(bulletY17>=485){
            bulletY17=150;
        }
        if(stage===8&&playerY===100&&bulletX10>=playerX&& bulletX10<=playerX+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===8&&playerY===200&&bulletX12>=playerX&& bulletX12<=playerX+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===8&&playerY===250&&bulletX13>=playerX&& bulletX13<=playerX+50){
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===8&&playerY===300&&bulletX14>=playerX&& bulletX14<=playerX+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
        if(stage===8&&playerX===100&&bulletY11>=playerY&&bulletY11<=playerY+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
        if(stage===8&&playerX===250&&bulletY15>=playerY&&bulletY15<=playerY+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
        if(stage===8&&playerX===300&&bulletY16>=playerY&&bulletY16<=playerY+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
        if(stage===8&&playerX===350&&bulletY17>=playerY&&bulletY17<=playerY+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
    
        
        stroke(112, 112, 112);
        fill(112, 112, 112);
        rect(cannonX2-113, cannonY2+-99, 48,49); // Cannon - Player X&Y = 100
        rect(114,95,22,40);
        rect(cannonX2-213, cannonY2+101, 48,49); // Cannon - Player Y = 300
        rect(15,313,40,22);
        rect(cannonX2-213, cannonY2+52, 48,49); // Cannon - Player Y = 250
        rect(15,264,40,22);
        rect(cannonX2-213, cannonY2+3, 48,49); // Cannon - Player Y = 200
        rect(15,215,40,22);
        
        rect(cannonX2-13, cannonY2+2, 48,49); // Cannon - Player X&Y = 200
        rect(196,215,40,22);
        rect(cannonX2-13, cannonY2+51, 48,49); // Cannon - Player X = 200 & Y = 250
        rect(195,259,40,22);    
        rect(cannonX2-13, cannonY2+101, 48,49); // Cannon - Player X = 200 & Y = 300
        rect(195,311,40,22);    
        rect(cannonX2+87, cannonY2+-50, 48,49); // Cannon - Player X = 300 & Y = 150
        rect(313,163,22,40);
        rect(cannonX2+135, cannonY2+-50, 48,49); // Cannon - Player X = 350 & Y = 150
        rect(364,163,22,40);
        rect(cannonX2+36, cannonY2+101, 48,49); // Cannon - Player X = 250 & Y = 300
        rect(263,314,22,40);
        
        
        fill(24, 32, 82);
        stroke(24, 32, 82);
        rect(portalX+200, portalY+50, 50,50);  // 1st Teleporter Location
        rect(portalDestinationX+50, portalDestinationY+150, 50,50); // 2nd Teleporter Location
    
        if(stage===8&&playerX===200&&playerY===50){ // Teleport 
            playerX=50;
            playerY=150;
            playSound(getSound("rpg/battle-spell"));
        }
    
        fill(227, 53, 53); // Stage Name
        text("STAGE 7",titlePositionX7,titlePositionY7,300,50);
        titlePositionY7-=2;
    }

    if (stage === 9){
        
        image(destination, destinationX8, destinationY8,49,76); // Location of Star
        //deaths
        if(stage===9 && playerX===300 && playerY>=150 && playerY<=300){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));   
        }
        if(stage===9 && playerX===200 && playerY>=150 && playerY<=300){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));   
        }
        if(stage===9 && playerX===150 && playerY>=250 && playerY<=300){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));   
        }
        if(stage===9 && playerX>=0 && playerX<=50 && playerY===300){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));   
        }
        if(stage===9 && playerX>=50 && playerX<=100 && playerY>=50 && playerY<=100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));   
        }
        if(stage===9 && playerX>=50 && playerX<=100 && playerY>=50 && playerY<=100){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));   
        }
        if(stage===9 && playerX===200 && playerY>=0 && playerY<=50){
            stage+=498;
            playSound(getSound("rpg/water-bubble"));   
        }
        if(stage===9 && playerX===350 && playerY===100){
            stage++;
            playSound(getSound("rpg/coin-jingle"));   
        }
        if(stage===9 && playerX===0 && playerY===200){
            stage+=500;
            playSound(getSound("rpg/step-heavy"));   
        }
        if(stage===9 && playerX===150 && playerY===200){
            stage+=500;
            playSound(getSound("rpg/step-heavy"));   
        }    
        if(stage===9 && playerX===50 && playerY===350){
            stage+=500;
            playSound(getSound("rpg/step-heavy"));   
        }  
        if(stage===9 && playerX===350 && playerY===350){
            stage+=500;
            playSound(getSound("rpg/step-heavy"));   
        }    
        if(stage===9 && playerX===250 && playerY===150){
            stage+=500;
            playSound(getSound("rpg/step-heavy"));   
        }    
        if(stage===9 && playerX===250 && playerY===0){
            stage+=500;
            playSound(getSound("rpg/step-heavy"));   
        }    
        //water
        image(water,waterX2+-3,waterY2-221,50,96); //Player X = 300 & Y = 150
        image(water,waterX2+-3,waterY2-172,50,91); //Player X = 300 & Y = 200
        image(water,waterX2+-3,waterY2-127,50,95); //Player X = 300 & Y = 250    
        image(water,waterX2+-3,waterY2-78,50,86); //Player X = 300 & Y = 300   
    
        image(water,waterX2-103,waterY2-221,50,96); //Player X = 200 & Y = 150
        image(water,waterX2-103,waterY2-172,50,91); //Player X = 200 & Y = 200
        image(water,waterX2-103,waterY2-127,50,95); //Player X = 200 & Y = 250    
        image(water,waterX2-103,waterY2-78,50,86); //Player X = 200 & Y = 300     
        
        image(water,waterX2-153,waterY2-127,50,95); //Player X = 200 & Y = 250    
        image(water,waterX2-153,waterY2-78,50,86); //Player X = 200 & Y = 300     
    
        image(water,waterX2-253,waterY2-65,50,74); //Player X = 200 & Y = 250    
        image(water,waterX2-303,waterY2-65,50,74); //Player X = 200 & Y = 300   
        
        image(water,waterX2-203,waterY2-319,50,95); //Player X = 100 & Y = 50    
        image(water,waterX2-203,waterY2-268,50,75); //Player X = 100 & Y = 100     
        image(water,waterX2-253,waterY2-319,50,95); //Player X = 50 & Y = 50    
        image(water,waterX2-253,waterY2-268,50,75); //Player X = 50 & Y = 100
    
        image(water,waterX2-103,waterY2-367,50,91); //Player X = 100 & Y = 100    
        image(water,waterX2-103,waterY2-319,50,77); //Player X = 100 & Y = 50      
        //bullets
        stroke(255, 255, 255);
        line(bulletX20,bulletY20+50,bulletX20+10,bulletY20+50);// -Bullet- 
        bulletX20-=4.5;
       
        line(bulletX21,bulletY21-100,bulletX21+10,bulletY21-100);// -Bullet- 
        bulletX21-=3;
        
        line(bulletX18+200, bulletY18, bulletX18+200, bulletY18+10); // -Bullet- 
        bulletY18+=3;
    
        line(bulletX19+300, bulletY19, bulletX19+300, bulletY19+10); // -Bullet- 
        bulletY19-=7;
    
        line(bulletX22+100, bulletY22, bulletX22+100, bulletY22+10); // -Bullet- 
        bulletY22-=0.75;
            
        //if statements for bullets
        if(bulletX20<=50){ //Horizontal 
            bulletX20=350;
        }
        if(bulletX21<=50){ //Horizontal
            bulletX21=150;
        }
        if(bulletY18>=150){ //Vertical
            bulletY18=0;
        }
        if(bulletY19<=0){ //Vertical
            bulletY19=350;
        }
        if(bulletY22<=0){//Vertical
            bulletY22=200;
        }
        
        if(stage===9&&playerY===350&&bulletX20>=playerX&& bulletX20<=playerX+50){ // Bottom Most
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
        if(stage===9&&playerY===200&&bulletX21>=playerX&& bulletX21<=playerX+50){ // Bottom Most
            stage+=500;
            playSound(getSound("retro/rumble"));
        }
         if(stage===9&&playerX===250&&bulletY18>=playerY&&bulletY18<=playerY+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
         if(stage===9&&playerX===350&&bulletY19>=playerY&&bulletY19<=playerY+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
         if(stage===9&&playerX===150&&bulletY22>=playerY&&bulletY22<=playerY+50){
            stage+=498;
            playSound(getSound("retro/rumble"));
        }
    
        
        
        // Cannon Shapes + Locations    
        stroke(112, 112, 112);
        fill(112, 112, 112);
        rect(cannonX2-163, cannonY2+152, 48,49); // Player X = 50 & Y = 350
        rect(63,366,40,22);
        rect(cannonX2+136, cannonY2+152, 48,49); // Player X&Y = 350
        rect(346,366,40,22); 
        rect(364,347,22,40);
        rect(cannonX2+38, cannonY2+-49, 48,49); // Player X = 250 & Y = 150
        rect(264,146,22,40);    
        rect(cannonX2+38, cannonY2+-198, 48,49); // Player X = 250
        rect(264,14,22,40);   
        rect(cannonX2+-63, cannonY2+-4, 48,49); // Player X = 150 & Y = 200
        rect(164,190,22,40); 
        rect(146,210,40,22);     
        rect(cannonX2+-214, cannonY2+2, 48,49); // Player X = 150 & Y = 200
        rect(13,213,40,22); 
        
        
        
        
        fill(227, 53, 53); // Stage Name
        text("STAGE 8",titlePositionX8,titlePositionY8,300,50);
        titlePositionY8-=2;
        
    }
    //if player wins the game
    if(stage===10){
            textSize(41);
            fill(255, 255, 255);
            text("Congratulations!",14,50);
            fill(227, 53, 53);
            textSize(25);
            text("  You have conquered",0,106);
            text("\n      the Huffle Puff's Quest!", 50,106);
            textSize(35);
            fill(156, 150, 150);
            text("Play Again!",100,200);
            text("Share This With\n                        A Friend!",10,300);
            fill(252, 252, 252);
            textSize(20);
            text("OR..",200,250);
            fill(227, 53, 53);
            text("Press Restart - Return to Home",40,380);
    }

    // Instructions : HomeScreen 
    if (stage === 25) {
        var font2 = createFont("Broadway");
        text("PRESS RESTART TO GO TO MENU",28,384);
     
        fill(227, 53, 53);
        textFont(font2,34);
        text("INSTRUCTIONS",80,40);
        fill(255, 255, 255);
        textSize(20); 
        text("  Use the arrow keys to navigate the \n                           towards the         to move\n  on to the next stage!",1,76);
        text("  Use teleports and Dodge bullets.\n  Teleports send you closer to your \n  destination.\n  Do not intersect with bullets.  ",1,148);
        fill(227, 53, 53);
        text("Huffle-Puff",13,100);
        fill(227, 53, 53);
        textSize(25);
        text("DO NOT:",14,261);
        fill(255, 255, 255);
        textSize(20);
        text("Touch the                   or                      or\nelse, you will have to start over\n from the beginning!",14,300);
        fill(144, 173, 240);
        text("WATER",131,300);
        fill(186, 186, 186);
        text("BULLETS",248,300);
        image(destination,266,57,38,62);
        fill(215, 194, 242);
        textSize(22);
        text("PRESS RESTART TO GO BACK",35,384);
    }
//Death Stage
    if(stage>=500){ // If Player touches water || bullet - Try Again Page
        playerX=0;
        playerY=0;
        var font= createFont("broadway");
        textFont(font,42);
        fill(240, 67, 67);
        text("    DID YOU \nLEARN FROM\n       YOUR\n MISTAKES? \n TRY AGAIN.",54,67);
        fill(255, 255, 255);
        text("PRESS ENTER.",50,354);
        
    }

    image(player,playerX,playerY,50,50); // Player Character 
    
    mousePressed=function(){ // Code for First Page: Clicking Start / Instructions
           rect(118,163,154,48);
           rect(43,243,320,48); 
           if(stage===1&&mouseX>=118&&mouseX<=272&&mouseY>=163&&mouseY<=211&&mousePressed){
               stage++;
           }
           if(playerX<0){
               playerX+=50;
           }
           if(stage===1&&mouseX>=43&&mouseX<=363&&mouseY>=243&&mouseY<=291&&mousePressed){
               stage+=24;
           }
    };  
    
    
};

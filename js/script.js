const $canvas = document.querySelector('.canvas')
const context = $canvas.getContext('2d')

context.beginPath()// Commencer un tracé
// Remplissage d'un rectangle (ici background)
const gradient = context.createLinearGradient(1000, 1200, 800, 2) // x1, y1, x2, y2
gradient.addColorStop(0, 'rgb(1, 55, 135)')    // Couleur de départ
gradient.addColorStop(0.5, 'rgb(6, 31, 79)') // Couleur de milieu
gradient.addColorStop(1, 'rgb(1, 2, 30)') // Couleur de arrivée
context.fillStyle = gradient  // Le dégradé devient le style de remplissage
context.save()
context.fillRect(0, 0, 1600, 800) // On dessine un carré

// Cercles (lune)
  context.arc(750, 300, 250, 0, 2 * Math.PI);
  context.lineWidth = 1 // Largeur de la ligne
  context.lineCap = 'round' // Fin de ligne (round | butt | square)
  context.lineJoin = 'bevel' // Jointure des lignes (bevel | round | mitter)
  context.strokeStyle = 'rgb(244, 246, 203)' // Couleur de la ligne
  context.fillStyle = 'rgb(237, 237, 228)'; //Couleur du remplissage
  context.shadowOffsetX = 5  // Décalage en X
  context.shadowOffsetY = 10 // Décalage en Y
  context.shadowBlur = 50 // Largeur du flou
  context.shadowColor = 'rgb(244, 246, 203)' // Couleur de l'ombre
  context.save()
  context.fill() // Faire apparaitre la forme dessinée "remplie"
  context.stroke() // Faire apparaitre les lignes tracées



  //coeurs
  context.beginPath();
      context.moveTo(75, 40);
      context.bezierCurveTo(75, 37, 70, 25, 50, 25);
      context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      context.bezierCurveTo(20, 80, 40, 102, 75, 120);
      context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      context.bezierCurveTo(85, 25, 75, 37, 75, 40);
      context.fill();
      context.fillStyle = 'rgb(237, 237, 228)'; //Couleur du remplissage

        //montagnes
        context.moveTo(1, 1000)
        context.lineTo(1, 670)
        context.lineTo(20, 750)
        context.lineTo(30, 560)
        context.lineTo(40, 550)
        context.lineTo(60, 600)
        context.lineTo(80, 610)
        context.lineTo(90, 500)
        context.lineTo(100, 520)
        context.lineTo(190, 300)
        context.lineTo(230, 400)
        context.lineTo(255, 350)
        context.lineTo(280, 450)
        context.lineTo(300, 400)
        context.lineTo(310, 450)
        context.lineTo(320, 490)
        context.lineTo(330, 480)
        context.lineTo(350, 450)
        context.lineTo(370, 470)
        context.lineTo(410, 500)
        context.lineTo(420, 480)
        context.lineTo(430, 490)
        context.lineTo(450, 500)
        context.lineTo(470, 470)
        context.lineTo(510, 480)
        context.lineTo(530, 540)
        context.lineTo(540, 550)
        context.lineTo(560, 560)
        context.lineTo(580, 510)
        context.lineTo(590, 500)
        context.lineTo(600, 520)
        context.lineTo(690, 350)
        context.lineTo(730, 400)
        context.lineTo(755, 350)
        context.lineTo(780, 450)
        context.lineTo(800, 400)
        context.lineTo(810, 450)
        context.lineTo(820, 490)
        context.lineTo(830, 480)
        context.lineTo(850, 450)
        context.lineTo(870, 470)
        context.lineTo(910, 500)
        context.lineTo(950, 450)
        context.lineTo(1000, 460)
        context.lineTo(1030, 400)
        context.lineTo(1040, 450)
        context.lineTo(1060, 390)
        context.lineTo(1080, 410)
        context.lineTo(1090, 450)
        context.lineTo(1100, 460)
        context.lineTo(1130, 430)
        context.lineTo(1160, 500)
        context.lineTo(1190, 430)
        context.lineTo(1230, 400)
        context.lineTo(1255, 350)
        context.lineTo(1280, 450)
        context.lineTo(1300, 400)
        context.lineTo(1310, 450)
        context.lineTo(1320, 490)
        context.lineTo(1330, 480)
        context.lineTo(1350, 450)
        context.lineTo(1370, 470)
        context.lineTo(1400, 520)
        context.lineTo(1490, 300)
        context.lineTo(1530, 400)
        context.lineTo(1555, 900)


        // context.closePath()
        context.fill() // Faire apparaitre la forme dessinée "remplie"
        context.stroke() // Faire apparaitre les lignes tracées

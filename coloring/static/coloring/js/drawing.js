 window.onload = function() {
   // coloring page
   var drawing = {
     item: null,
     lastClicked: null,
     filePath: '/static/coloring/images/library-art/animals/animal1.svg'
   };

   // color palette
   var cp = {
     history: ["#9e9e9e"], // grey selected by default
     options: [],
     $container: $('#color-palette')
   }

   // coloring variables
   const undoHistory = [];
   const redoHistory = [];
   const redoColors = {};
   let prevSwatch = null;
   let selectedColor = "#9e9e9e";
   let selectedBrush = false;

   function myCustomInteraction() {
     var tool = new paper.Tool();

     tool.onMouseDown = function(event) {
       var hit = drawing.item.hitTest(event.point, {
         tolerance: 10,
         fill: true
       });
       if (hit && !selectedBrush) {
         // Color pallette keeps track of the full history of colors, though we
         // only color in with the most-recent color.
         hit.item.fillColor = cp.history[cp.history.length - 1];
         undoHistory.push(hit.item);
         redoColors[hit.item] = hit.item.fillColor;
         if (undoHistory) {
           $('#undoBtn').css("opacity", "100%")
         }
       }
     }
   }

   // create a color palette with the given colors
   function createColorPalette(colors) {

     // create a swatch for each color
     for (var i = colors.length - 1; i >= 1; i--) {
       var $swatch = $("<div>").css("background-color", colors[i])
         .addClass("swatch");
       $swatch.click(function() {
         if (prevSwatch) {
           prevSwatch.css("box-shadow", "0 0 0 0");
         }

         // add color to the color palette history, and style palette with innershadow
         $(this).css("box-shadow", "inset 0px 6px 15px");
         cp.history.push($(this).css("background-color"));
         prevSwatch = $(this);
         selectedColor = $(this).css("background-color");
         resetPen();
       });
       cp.$container.append($swatch);
     }
     $swatch.css("box-shadow", "inset 0px 6px 15px");
     prevSwatch = $swatch;
     selectedColor = prevSwatch.css("background-color");
   }

   // loads a set of colors from a json to create a color palette
   function getColorsCreatePalette() {
     cp.$container.html(" ");
     $.getJSON('/static/coloring/vendors/material/material-colors.json', function(colors) {
       var keys = Object.keys(colors);
       for (var i = keys.length - 1; i >= 0; i--) {
         cp.options.push(colors[keys[i]][500]);
       }
       createColorPalette(cp.options);
     });
   }

   // undo function
   function undoColor() {
     let undoTarget = undoHistory.pop();
     redoHistory.push(undoTarget)
     undoTarget.fillColor = "#FFFFFF"
   }

   // redo function
   function redoColor() {
     let redoTarget = redoHistory.pop();
     undoHistory.push(redoTarget);
     redoTarget.fillColor = redoColors[redoTarget]
   }

   // reset function
   function reset() {
     undoHistory.forEach(item => {
       item.fillColor = "#FFFFFF"
     })
     undoHistory.length = 0;
     redoHistory.length = 0;
     redoColors.length = 0;
     $('#redoBtn').css("opacity", "15%")
     $('#undoBtn').css("opacity", "15%")
     prevSwatch.css("box-shadow", "0 0 0 0")
   }

   // initialization function
   function init(custom) {
     paper.setup(canvas);
     getColorsCreatePalette();

     paper.project.importSVG(drawing.filePath, function(item) {
       drawing.item = item._children["layer1"];
       paper.project.insertLayer(0, drawing.item);
       paper.project.layers[0].fitBounds(paper.view.bounds)
       paper.project.layers[0].scale(0.7)

       if (custom) {
         myCustomInteraction();
       } else {
         myGradientInteraction();
       }

     });
   }

   /*
    * Canvas Pen Tool
    */

   // pen variables
   var canvas = document.getElementById('myCanvas');
   var ctx = canvas.getContext('2d');
   var width = window.innerWidth;
   var height = window.innerHeight;
   var penWidth = 12;
   var penColor = selectedColor;

   canvas.height = height;
   canvas.width = width;

   function start(e) {
     this.down = true;
     this.X = e.touches[0].pageX;
     this.Y = e.touches[0].pageY;
   }

   function end() {
     this.down = false;
   }

   function pencil(e) {
     if (this.down) {
       with(ctx) {
         beginPath();
         moveTo(this.X, this.Y);
         lineTo(e.touches[0].pageX, e.touches[0].pageY);
         ctx.lineWidth = penWidth;
         ctx.lineCap = "round";
         ctx.strokeStyle = penColor;
         stroke();
       }
       this.X = e.touches[0].pageX;
       this.Y = e.touches[0].pageY;
     }
   }

   function startPen() {
     penColor = selectedColor;
     canvas.addEventListener('touchstart', start, 0);
     canvas.addEventListener('touchend', end, 0);
     canvas.addEventListener('touchmove', pencil, 0);
   }

   function endPen() {
     canvas.removeEventListener('touchstart', start, 0);
     canvas.removeEventListener('touchend', end, 0);
     canvas.removeEventListener('touchmove', pencil, 0);
   }

   function resetPen() {
     $('.strokes').css("background-color", selectedColor);
     endPen();
     startPen();
   }

   // Set up the drawing interactivity.
   init(true);

   // onclick events
   $('#undoBtn').on("click", function() {
     if (undoHistory.length) {
       undoColor();
     }
     if (undoHistory.length > 0) {
       $('#undoBtn').css("opacity", "100%")
     } else {
       $('#undoBtn').css("opacity", "15%")
     }
     if (redoHistory.length > 0) {
       $('#redoBtn').css("opacity", "100%")
     } else {
       $('#redoBtn').css("opacity", "15%")
     }
   })

   $('#redoBtn').on("click", function() {
     if (redoHistory.length) {
       redoColor();
     }
     if (undoHistory.length > 0) {
       $('#undoBtn').css("opacity", "100%")
     } else {
       $('#undoBtn').css("opacity", "15%")
     }
     if (redoHistory.length > 0) {
       $('#redoBtn').css("opacity", "100%")
     } else {
       $('#redoBtn').css("opacity", "15%")
     }
   })

   $('#resetBtn').on("click", function() {
     reset();
     $('this').addClass('pressed')
   })

   $('#backBtn').on("click", function() {
     location.href = 'library'
   })

   $('#communityBtn').on("click", function() {
     location.href = 'art_community_main_page'
   })

   $('#brushBtn').on("click", function() {
     $('.strokes').css("background-color", selectedColor);

     if (selectedBrush) {
       $('#brush-slider').switchClass("brush-slider", "brush-slider-hidden")
       endPen();
       $(this).attr(
         'src', '/static/coloring/icons/brush_white.svg')

     } else {
       $('#brush-slider').switchClass("brush-slider-hidden", "brush-slider")
       startPen();
       $(this).attr(
         'src', '/static/coloring/icons/palette.svg')
     }
     selectedBrush = !selectedBrush;
   })

   // pen width selector

   $('#s1').on("click", function() {
     $('.strokes').css("border", "thin solid black")
     $(this).css("border", "thick solid black")
     penWidth = 15;
     resetPen();
   })

   $('#s2').on("click", function() {
     $('.strokes').css("border", "thin solid black")
     $(this).css("border", "thick solid black")
     penWidth = 25;
     resetPen();
   })

   $('#s3').on("click", function() {
     $('.strokes').css("border", "thin solid black")
     $(this).css("border", "thick solid black")
     penWidth = 35;
     resetPen();
   })

 }
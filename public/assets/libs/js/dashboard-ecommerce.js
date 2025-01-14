 
    
    $(function() {
        "use strict";
        // ============================================================== 
        // Product Sales
        // ============================================================== 

        new Chartist.Bar('.ct-chart-product', {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
                [800000, 1200000, 1400000, 1300000],
                [200000, 400000, 500000, 300000],
                [100000, 200000, 400000, 600000]
            ]
        }, {
            stackBars: true,
            axisY: {
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        }).on('draw', function(data) {
            if (data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 40px'
                });
            }
        });
    });




    // ============================================================== 
    // Product Category
    // ============================================================== 
    var chart = new Chartist.Pie('.ct-chart-category', {
        series: [65, 10, 30],
        labels: ['Agua', 'Energía', 'Climatización']
    }, {
        donut: true,
        showLabel: true,
        donutWidth: 50


    });


    chart.on('draw', function(data) {
        if (data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1000,
                    from: -pathLength + 'px',
                    to: '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                    fill: 'freeze'
                }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    


    // ============================================================== 
    // Customer acquisition
    // ============================================================== 
    // 
    // 
    // https://c3js.org/samples/data_json.html Ejemplo para resolver el json...TODO: importante!!!!!
    // 
    var fruits = ["Jul", "Ago", "Sep", "Oct", "Nov"];
    var serie1 = [1, 5, 3, 5, 4];
    var serie2 = [2, 3, 4, 8];
    var serie3 = [2, 3, 4, 8, 4];
    var chart = new Chartist.Line('.ct-chart', {
        labels: fruits,
        series: [{
            name:'series-1',
            data: serie1
        }, {
            name:'series-2',
            data: serie2
        }, {
            name:'series-3',
            data: serie3
        }]
    }, {
        chartPadding: {
            right: 40
        },
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        series: {
            'series-1': {
              lineSmooth: Chartist.Interpolation.step(),
              //lineColor: '#ff407b'
            },
            'series-2': {
              lineSmooth: Chartist.Interpolation.cardinal(),
              showArea: true
            },
            'series-3': {
              lineSmooth: Chartist.Interpolation.cardinal(),  
              showPoint: true
            }
        }

    });

    chart.on('draw', function(data) {
        if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
                d: {
                    begin: 1000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
    });

    // ============================================================== 
    // Revenue Cards
    // ============================================================== 

/*   var stock = [
          { date: "2012-01-03", open: 409.40, high: 422.75, low: 409.00, close: 422.40, volume: 10283900, adj_close: 416.26 },
          { date: "2012-01-09", open: 425.50, high: 427.75, low: 418.66, close: 419.81, volume:  9327900, adj_close: 413.70 },
          { date: "2012-01-17", open: 424.20, high: 431.37, low: 419.75, close: 420.30, volume: 10673200, adj_close: 414.19 },
          { date: "2012-01-23", open: 422.67, high: 454.45, low: 419.55, close: 447.28, volume: 17397900, adj_close: 440.77 },
          { date: "2012-01-30", open: 445.71, high: 460.00, low: 445.39, close: 459.68, volume: 10817600, adj_close: 452.99 },
          { date: "2012-02-06", open: 458.38, high: 497.62, low: 458.20, close: 493.42, volume: 17778800, adj_close: 486.24 },
          { date: "2012-02-13", open: 499.53, high: 526.29, low: 486.63, close: 502.12, volume: 28314900, adj_close: 494.82 },
          { date: "2012-02-21", open: 506.88, high: 522.90, low: 504.12, close: 522.41, volume: 18499900, adj_close: 514.81 },
          { date: "2012-02-27", open: 521.31, high: 548.21, low: 516.28, close: 545.18, volume: 22964000, adj_close: 537.25 },
          { date: "2012-03-05", open: 545.42, high: 547.74, low: 516.22, close: 545.17, volume: 23951800, adj_close: 537.24 },
          { date: "2012-03-12", open: 548.98, high: 600.01, low: 547.00, close: 585.57, volume: 32158400, adj_close: 577.05 },
          { date: "2012-03-19", open: 598.37, high: 609.65, low: 589.05, close: 596.05, volume: 24402100, adj_close: 587.38 },
          { date: "2012-03-26", open: 599.79, high: 621.45, low: 595.26, close: 599.55, volume: 22840000, adj_close: 590.83 },
          { date: "2012-04-02", open: 601.83, high: 634.66, low: 600.38, close: 633.68, volume: 23635600, adj_close: 624.46 },
          { date: "2012-04-09", open: 626.13, high: 644.00, low: 603.51, close: 605.23, volume: 26127500, adj_close: 596.43 },
          { date: "2012-04-16", open: 610.06, high: 620.25, low: 570.42, close: 572.98, volume: 34975300, adj_close: 564.65 },
          { date: "2012-04-23", open: 570.61, high: 618.00, low: 555.00, close: 603.00, volume: 27794600, adj_close: 594.23 },
          { date: "2012-04-30", open: 597.80, high: 598.40, low: 565.17, close: 565.25, volume: 17607600, adj_close: 557.03 },
          { date: "2012-05-07", open: 561.50, high: 575.88, low: 558.73, close: 566.71, volume: 15505800, adj_close: 558.47 },
          { date: "2012-05-14", open: 562.57, high: 567.51, low: 522.18, close: 530.38, volume: 20281200, adj_close: 522.67 },
          { date: "2012-05-21", open: 534.50, high: 576.50, low: 534.05, close: 562.29, volume: 19540000, adj_close: 554.11 },
          { date: "2012-05-29", open: 570.90, high: 581.50, low: 560.52, close: 560.99, volume: 17166000, adj_close: 552.83 },
          { date: "2012-06-04", open: 561.50, high: 580.58, low: 548.50, close: 580.32, volume: 14813900, adj_close: 571.88 },
          { date: "2012-06-11", open: 587.72, high: 588.50, low: 566.70, close: 574.13, volume: 14293200, adj_close: 565.78 },
          { date: "2012-06-18", open: 570.96, high: 590.00, low: 570.37, close: 582.10, volume: 12654100, adj_close: 573.63 },
          { date: "2012-06-25", open: 577.30, high: 584.00, low: 565.61, close: 584.00, volume: 10630300, adj_close: 575.51 },
          { date: "2012-07-02", open: 584.73, high: 614.34, low: 583.60, close: 605.88, volume: 13795700, adj_close: 597.07 },
          { date: "2012-07-09", open: 605.30, high: 619.87, low: 592.68, close: 604.97, volume: 15001100, adj_close: 596.17 },
          { date: "2012-07-16", open: 605.12, high: 615.35, low: 603.15, close: 604.30, volume: 12013700, adj_close: 595.51 },
          { date: "2012-07-23", open: 594.40, high: 609.68, low: 570.00, close: 585.16, volume: 19578500, adj_close: 576.65 },
          { date: "2012-07-30", open: 590.92, high: 617.98, low: 587.82, close: 615.70, volume: 13593200, adj_close: 606.74 },
          { date: "2012-08-06", open: 617.29, high: 625.00, low: 615.26, close: 621.70, volume:  8955900, adj_close: 615.29 },
          { date: "2012-08-13", open: 623.39, high: 648.19, low: 623.25, close: 648.11, volume: 11240200, adj_close: 641.43 },
          { date: "2012-08-20", open: 650.01, high: 674.88, low: 648.11, close: 663.22, volume: 20349200, adj_close: 656.38 },
          { date: "2012-08-27", open: 679.99, high: 680.87, low: 657.25, close: 665.24, volume: 10987500, adj_close: 658.38 },
          { date: "2012-09-04", open: 665.76, high: 682.48, low: 664.50, close: 680.44, volume: 12724300, adj_close: 673.42 },
          { date: "2012-09-10", open: 680.45, high: 696.98, low: 656.00, close: 691.28, volume: 20736000, adj_close: 684.15 },
          { date: "2012-09-17", open: 699.35, high: 705.07, low: 693.62, close: 700.09, volume: 14332600, adj_close: 692.87 },
          { date: "2012-09-24", open: 686.86, high: 695.12, low: 660.35, close: 667.10, volume: 20459000, adj_close: 660.22 },
          { date: "2012-10-01", open: 671.16, high: 676.75, low: 650.65, close: 652.59, volume: 18290000, adj_close: 645.86 },
          { date: "2012-10-08", open: 646.88, high: 647.56, low: 623.55, close: 629.71, volume: 21378800, adj_close: 623.21 },
          { date: "2012-10-15", open: 632.35, high: 652.79, low: 609.62, close: 609.84, volume: 18514400, adj_close: 603.55 },
          { date: "2012-10-22", open: 612.42, high: 635.38, low: 591.00, close: 604.00, volume: 24908300, adj_close: 597.77 },
          { date: "2012-10-31", open: 594.88, high: 603.00, low: 574.75, close: 576.80, volume: 17508000, adj_close: 570.85 },
          { date: "2012-11-05", open: 583.52, high: 590.74, low: 533.72, close: 547.06, volume: 26312500, adj_close: 543.89 },
          { date: "2012-11-12", open: 554.15, high: 554.50, low: 505.75, close: 527.68, volume: 25590900, adj_close: 524.62 },
          { date: "2012-11-19", open: 540.71, high: 572.00, low: 539.88, close: 571.50, volume: 18856200, adj_close: 568.19 },
          { date: "2012-11-26", open: 575.90, high: 594.25, low: 572.26, close: 585.28, volume: 18505600, adj_close: 581.89 },
          { date: "2012-12-03", open: 593.65, high: 594.59, low: 518.63, close: 533.25, volume: 28073100, adj_close: 530.16 },
          { date: "2012-12-10", open: 525.00, high: 549.56, low: 505.58, close: 509.79, volume: 23891500, adj_close: 506.84 },
          { date: "2012-12-17", open: 508.93, high: 534.90, low: 501.23, close: 519.33, volume: 20790100, adj_close: 516.32 },
          { date: "2012-12-24", open: 520.35, high: 524.25, low: 504.66, close: 509.59, volume: 11496300, adj_close: 506.64 },
          { date: "2012-12-31", open: 510.53, high: 535.40, low: 509.00, close: 532.17, volume: 23553300, adj_close: 529.09 },
        ];*/


    //TODO: cargar la variable stock desde la DB (ajax?, )

    $("#sparkline-revenue").sparkline($.map(userstocks, function(wk) { return wk.adj_close; }), {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#5969ff',
        fillColor: '#dbdeff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true,
        disableTooltips: true
    }
    ).on('sparklineRegionChange', function(ev) {
        var idx = ev.sparklines[0].getCurrentRegionFields().offset;
        if (idx) {
            $(".info-1").html(
              "Fecha: " + userstocks[idx].date 
            + "&nbsp;&nbsp;&nbsp; valor: " + userstocks[idx].adj_close);
        }

    }).on('mouseout', function() {
        $(".info-1").html("&nbsp;");
    });



    $("#sparkline-revenue2").sparkline($.map(prestadorestock, function(wk) { return wk.adj_close; }), {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#ff407b',
        fillColor: '#ffdbe6',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true,
        disableTooltips: true
    }
    ).on('sparklineRegionChange', function(ev) {
        var idx = ev.sparklines[0].getCurrentRegionFields().offset;
        if (idx) {
            $(".info-2").html(
              "Fecha: " + prestadorestock[idx].date 
            + "&nbsp;&nbsp;&nbsp; valor: " + prestadorestock[idx].adj_close);
        }

    }).on('mouseout', function() {
        $(".info-2").html("&nbsp;");
    });



    $("#sparkline-revenue3").sparkline($.map(llamadastock, function(wk) { return wk.adj_close; }), {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#25d5f2',
        fillColor: '#dffaff',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true,
        disableTooltips: true
    }
    ).on('sparklineRegionChange', function(ev) {
        var idx = ev.sparklines[0].getCurrentRegionFields().offset;
        if (idx) {
            $(".info-3").html(
              "Fecha: " + llamadastock[idx].date 
            + "&nbsp;&nbsp;&nbsp; valor: " + llamadastock[idx].adj_close);
        }

    }).on('mouseout', function() {
        $(".info-3").html("&nbsp;");
    });



    $("#sparkline-revenue4").sparkline($.map(calificastock, function(wk) { return wk.adj_close; }), {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#fec957',
        fillColor: '#fff2d5',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize: true
    }
    ).on('sparklineRegionChange', function(ev) {
        var idx = ev.sparklines[0].getCurrentRegionFields().offset;
        if (idx) {
            $(".info-4").html(
              "Fecha: " + calificastock[idx].date 
            + "&nbsp;&nbsp;&nbsp; valor: " + calificastock[idx].adj_close);
        }

    }).on('mouseout', function() {
        $(".info-4").html("&nbsp;");
    });




    // ============================================================== 
    // Total Revenue
    // ============================================================== 
    Morris.Area({
        element: 'morris_totalrevenue',
        behaveLikeLine: true,
        data: [
            { x: '2019 Q3', y: 0, },
            { x: '2019 Q4', y: 100, },
            { x: '2020 Q1', y: 150, },
            { x: '2020 Q2', y: 225, },
            { x: '2020 Q3', y: 300, },
            { x: '2020 Q4', y: 400, }
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['Y'],
        lineColors: ['#5969ff'],
        resize: true

    });




    // ============================================================== 
    // Revenue By Categories
    // ============================================================== 

    // $.ajax({
    //     url: 'http://www.prontoservice.com.ar/pspia/v1/Api.php?apicall=getCountPresByGroup',
    //     success: function(respuesta) {
    //         $contGral = respuesta;
    //         console.log("Se ha podido obtener la información" + respuesta);
    //       // var listaUsuarios = $("#lista-usuarios");
    //       // $.each(respuesta.data, function(index, elemento) {
    //       //   listaUsuarios.append(
    //       //       '<div>'
    //       //     +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
    //       //     +     '<img src=' + elemento.avatar + '></img>'
    //       //     + '</div>'
    //       //   );    
    //       // });
    //     },
    //     error: function() {
    //       console.log("No se ha podido obtener la información");
    //     }
    // });


    var chart = c3.generate({
        bindto: "#c3chart_category",
        data: {
            columns: [
                ['Agua', cuentas[0].contAgua],
                ['Energía', cuentas[0].contEner],
                ['Climatización', cuentas[0].contClim],
                ['Suelos', cuentas[0].contSuel],
                ['Servicio', cuentas[0].contServ],
                ['Estructuras', cuentas[0].contEstr],
                ['Tecnología', cuentas[0].contTecn]
            ],
            type: 'donut',

            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); },

            colors: {
                Agua: '#5969ff',
                Energía: '#ff407b',
                Climatización: '#25d5f2',
                Suelos: '#ffc750',
                Servicio: '#2ec551',
                Estructuras: '#99ff00',
                Tecnología: '#0099ff'
            }
        },
        donut: {
            label: {
                format: function (value, ratio, id) {
                    return d3.format('')(value);
                }
            }
        },
    });


// module.exports =
//     function arraySports (participants, sports) {
//     /**
//      * Подобно оператору new создает экземпляр объекта,
//      * используя функцию-конструктор и параметры для нее
//      */
//     function constructFrom (fnConstructor, params) {
//         const res = {};
//
//         fnConstructor.bind(res).call(params);
//
//         Object.setPrototypeOf(res, fnConstructor);
//
//         return res;
//     }
//
//     /**
//      * Создает пары вида [’вид спорта’, ’имя участника’],
//      * где первому виду спорта соответствует последний участник
//      */
//     function assignParticipants () {
//         const participants = this.participants;
//         const sports = this.sports;
//         const orderIndexes = [];
//         let i = sports.length;
//
//         while (i--) {
//             orderIndexes.push(function() {
//                 return i;
//             });
//         }
//
//         return orderIndexes.map(
//             (getSportIndex, i) => [sports[i], participants[getSportIndex()]]
//         );
//     }
//
//     function Contest (participants, sports) {
//         this.participants = participants;
//         this.sports = sports;
//     }
//
//     Contest.prototype.assignParticipants = assignParticipants;
//
//
//     const contest = constructFrom(Contest, participants, sports);
//
//     return contest.assignParticipants();
// }
//arraySports(['1p','2p','3p'], ['1s','2s','3s'])


window.onload = function() {
    let drawingCanvas = document.getElementById('yandex');
    if(drawingCanvas && drawingCanvas.getContext) {
        let ctx = drawingCanvas.getContext('2d');

        //#f45a3b, #000000, #d8d8d8, #ﬀ0000, #999999, #666666, #222222, #ﬀﬀﬀ.



        // рисуем серую часть
        ctx.fillStyle = '#222222'
        ctx.beginPath()
        ctx.moveTo(270, 720)
        ctx.lineTo(270, 755)
        ctx.lineTo(340, 825)
        ctx.lineTo(690, 825)
        ctx.lineTo(760, 755)
        ctx.lineTo(760, 725)
        ctx.lineTo(750, 715)
        ctx.lineTo(280, 715)
        ctx.lineTo(280, 715)
        ctx.lineTo(270, 720)
        ctx.fill()

        // рисуем колеса
        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.arc(345, 820, 65, 0, Math.PI*2, true)
        ctx.arc(520, 820, 65, 0, Math.PI*2, true)
        ctx.arc(695, 820, 65, 0, Math.PI*2, true)
        ctx.closePath()
        ctx.fill()

        // рисуем серый прямоугольник на черной трапеции

            // ctx.beginPath()
            // ctx.moveTo(355,465)



        // рисуем серую крышку

        ctx.fillStyle = '#d8d8d8'
        ctx.beginPath();
        ctx.moveTo(250, 570);
        ctx.lineTo(250, 569);
        ctx.arcTo(250, 520, 320, 520, 30)
        ctx.lineTo(400, 520)
        ctx.bezierCurveTo(780, 520, 780, 570, 770,570)
        ctx.lineTo(250, 570)
        ctx.fill()



        // рисуем оранжевый и красный прямоугольники
        function drawRedLine (x, y, width, height, radius, colorFill=null, colorStroke=null) {
            ctx.fillStyle = colorFill
            ctx.strokeStyle = colorStroke
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
            if (colorFill && colorStroke) {
                ctx.fill()
                ctx.stroke()
            } else if (colorStroke) {
                ctx.stroke()
            } else if(colorFill) {
                ctx.fill()
            }

        }
        drawRedLine(255, 570, 520, 145, 25, '#f45a3b')
        drawRedLine(245,570, 540, 15, 10, '#ff0000')
        drawRedLine(355,425, 55, 45, 5, '#666666','#000000')

        // рисуем черную трапецию
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.moveTo(320, 520)
        ctx.lineTo(415,520)
        ctx.lineTo(415, 465)
        ctx.lineTo(340, 465)
        ctx.lineTo(320, 520)
        ctx.fill()

        // рисуем флаг
        ctx.fillStyle = '#ff0000'
        ctx.beginPath()
        ctx.moveTo(380,150)
        ctx.lineTo(315, 130)
        ctx.lineTo(380, 110)
        ctx.lineTo(380, 150)
        ctx.closePath()
        ctx.fill()

        // рисуем антенну
        function antenna () {
            ctx.strokeStyle = '#999999'
            ctx.beginPath()
            ctx.moveTo(383, 425)
            ctx.lineTo(383, 105)
            ctx.lineWidth = 5
            ctx.stroke()
        }
        antenna()


    }
}
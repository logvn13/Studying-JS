const Module = {};

Module.array = [];

Module.barChart = (canvas, width, height, color) => {
    if (typeof canvas == "string") canvas = document.getElementById(canvas);
    const data = Module.array;
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext("2d");

    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    for (let i = 0; i < data.length; i++) {
        let barHeight = data[i] * scale,
            x = barWidth * i,
            y = height - barHeight;

        context.fillStyle = color;
        context.fillRect(x, y, barWidth - 2, barHeight);
    }
};

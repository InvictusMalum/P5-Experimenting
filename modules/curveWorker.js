window.addEventListener("hello", recieveData, false);

export function recieveData(event) {
    [x, y, grid, left_x, top_y, resolution, step_length, num_steps] = event.args;
    points = [];
    for (let n=0; n<num_steps; n++) {
        x_offset = x - left_x;
        y_offset = y - top_y;
        column_index = parseInt(x_offset / resolution);
        row_index = parseInt(y_offset / resolution);
        points.push([x,y]);
        if (column_index>=0 && row_index>=0 && column_index<num_columns && row_index<num_rows) {
            grid_angle = grid[column_index][row_index];
            x_step = step_length * Math.cos(grid_angle);
            y_step = step_length * Math.sin(grid_angle);
            x += x_step;
            y += y_step;
        } else {
            break;
        }
    }
    return points;
}

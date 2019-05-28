var solver = new SudokuSolver();

function solve() {
    var s = '';
    for (var i = 0; i < 81; ++i) {
      var y = document.getElementById('C' + i).value;
      if (y >= 1 && y <= 9) {
        s += '' + y;
      } else {
        s += '.';
      }
    }
  
    var time_beg = new Date().getTime();
    var x = solver.solve(s);
  
    var t = (new Date().getTime() - time_beg) / 1000.0;
  
    //document.getElementById('runtime').innerHTML = 'Solved puzzle in ' + t + ' seconds ( ' + t * 1000.0 + ' ms ).';
    s = '';
  
    for (var z = 0; z < 81; ++z) {
      document.getElementById('C' + z).value = x[z];
    }
}

function set_9x9(str) {
    if (str != null && str.length >= 81) {
        for (var i = 0; i < 81; ++i) {
        document.getElementById('C' + i).value = '';
        }
        for (var j = 0; j < 81; ++j) {
        if (str.substr(j, 1) >= 1 && str.substr(j, 1) <= 9) {
            document.getElementById('C' + j).value = str.substr(j, 1);
        }
        }
    }
}

function draw_9x9() {
    var s = '<table class="table">\n';
  
    for (var i = 0; i < 9; ++i) {
      s += '<tr>';
      for (var j = 0; j < 9; ++j) {
        var c = 'cell';
        if ((i + 1) % 3 == 0 && j % 3 == 0) {
          c = 'cell3';
        } else if ((i + 1) % 3 == 0) {
          c = 'cell1';
        } else if (j % 3 == 0) {
          c = 'cell2';
        }
        s += '<td class="' + c + '"><input class="input" type="text" size="1" maxlength="1" id="C' + (i * 9 + j) + '"></td>';
      }
      s += '</tr>\n';
    }
  
    s += '</table>';
    document.getElementById('9x9').innerHTML = s;
    var inp = document.URL;
    var set = false;
  
    if (inp.indexOf('?') >= 0) {
      var match = /[?&]puzzle=([^\s&]+)/.exec(inp);
      if (match.length == 2 && match[1].length >= 81) {
        set_9x9(match[1]);
        set = true;
      }
    }
  
    if (!set) {
      set_9x9('032054900090001004080700031005600027800070000270140005000210300018907652603000000');
    }
}

function clear_input() {
    for (var i = 0; i < 81; ++i) {
      document.getElementById('C' + i).value = '';
    }

    draw_9x9();
}

function setPredefined() {
    set_9x9('001700509573024106800501002700295018009400305652800007465080071000159004908007053');
}
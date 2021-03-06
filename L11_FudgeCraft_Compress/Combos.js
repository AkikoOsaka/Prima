"use strict";
var L11_FudgeCraft_Compress;
(function (L11_FudgeCraft_Compress) {
    class Combos {
        constructor(_elements) {
            this.found = [];
            this.detect(_elements);
        }
        detect(_elements) {
            for (let element of _elements) {
                if (this.contains(element))
                    continue;
                let combo = [];
                combo.push(element);
                this.recurse(element, combo);
                this.found.push(combo);
            }
        }
        contains(_element) {
            for (let combo of this.found)
                for (let element of combo)
                    if (element == _element)
                        return true;
            return false;
        }
        recurse(_element, _combo) {
            let matches = this.findNeigborsOfSameColor(_element);
            for (let iMatch = matches.length - 1; iMatch >= 0; iMatch--) {
                let match = matches[iMatch];
                let iCombo = _combo.indexOf(match);
                if (iCombo >= 0)
                    matches.splice(iMatch, 1);
                else
                    _combo.push(match);
            }
            for (let match of matches)
                this.recurse(match, _combo);
        }
        findNeigborsOfSameColor(_element) {
            let allNeighbors = L11_FudgeCraft_Compress.grid.findNeighbors(_element.position);
            let found = allNeighbors.filter(_neighbor => (_neighbor.cube.name == _element.cube.name));
            return found;
        }
    }
    L11_FudgeCraft_Compress.Combos = Combos;
})(L11_FudgeCraft_Compress || (L11_FudgeCraft_Compress = {}));
//# sourceMappingURL=Combos.js.map
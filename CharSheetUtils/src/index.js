/**
 * Create the CharSheetUtils library. All the functionality of this library
 * is exposed through its static methods.
 */
var CharSheetUtils = (() => {
  'use strict';

  return class {
    /**
     * Asynchronously gets the value of a character sheet attribute.
     * @param  {Character} character
     * @param  {string} attr
     * @return {Promise<number>}
     *         Contains the value of the attribute.
     */
    static async getSheetAttr(character, attr) {
      if(attr.includes('/'))
        return CharSheetUtils.getSheetRepeatingAttr(character, attr);
      else {
        return getSheetItem(character.id, attr).then((value) => {
          return value;
        });
      }
    }

    /**
     * Asynchronously gets the value of a character sheet attribute from a
     * repeating row.
     * @param {Character} character
     * @param {string} attr
     *        Here, attr has the format "sectionName/nameFieldName/nameFieldValue/valueFieldName".
     *        For example: "skills/name/perception/total"
     * @return {Promise<number>}
     *         Contains the value of the attribute.
     */
    static getSheetRepeatingAttr(character, attr) {
      let parts = attr.split('/');
      if(parts.length < 4) return;

      let sectionName = parts[0];
      let nameFieldName = parts[1];
      let nameFieldValue = parts[2].toLowerCase();
      let valueFieldName = parts[3];

      // Find the row with the given name.
      return CharSheetUtils.getSheetRepeatingRow(character, sectionName, rowAttrs => {
        let nameField = rowAttrs[nameFieldName];
        if(!nameField)
          return false;
        return nameField.get('current').toLowerCase().trim() === nameFieldValue;
      })

      // Get the current value of that row.
      .then(rowAttrs => {
        if(!rowAttrs)
          return NaN;

        let valueField = rowAttrs[valueFieldName];
        if(!valueField)
          return NaN;
        return valueField.get('current');
      });
    }

    /**
     * Gets the map of attributes inside of a repeating section row.
     * @param {Character} character
     * @param {string} section
     *        The name of the repeating section.
     * @param {func} rowFilter
     *        A filter function to find the correct row. The argument passed to it is a
     *        map of attribute names (without the repeating section ID part - e.g. "name"
     *        instead of "repeating_skills_-123abc_name") to their actual attributes in
     *        the current row being filtered. The function should return true iff it is
     *        the correct row we're looking for.
     * @return {Promise<any>}
     *         Contains the map of attributes.
     */
    static getSheetRepeatingRow(character, section, rowFilter) {
      // Get all attributes in this section and group them by row.
      let attrs = findObjs({
        _type: 'attribute',
        _characterid: character.get('_id')
      });

      // Group the attributes by row.
      let rows = {};
      _.each(attrs, attr => {
        let regex = new RegExp(`repeating_${section}_(-([0-9a-zA-Z\-_](?!_storage))+?|\$\d+?)_([0-9a-zA-Z\-_]+)`);
        let match = attr.get('name').match(regex);
        if(match) {
          let rowId = match[1];
          let attrName = match[3];
          if(!rows[rowId])
            rows[rowId] = {};

          rows[rowId][attrName] = attr;
        }
      });

      // Find the row that matches our filter.
      return Promise.resolve(_.find(rows, rowAttrs => {
        return rowFilter(rowAttrs);
      }));
    }

    /**
     * Asynchronously rolls a dice roll expression and returns the roll result
     * in a Promise.
     * @param  {string} expr
     * @return {Promise<RollResult>}
     */
    static rollAsync(expr) {
      return new Promise((resolve, reject) => {
        sendChat('CharSheetUtils', '/w gm [[' + expr + ']]', (msg) => {
          try {
            let results = msg[0].inlinerolls[0].results;
            resolve(results);
          }
          catch(err) {
            log(expr);
            reject(err);
          }
        });
      });
    }

    static send(text) {
      sendChat('API', '' + `<div>${text}</div>`, null, {noarchive:true});
    }

    static async handleInput(msg) {
      let args = msg.content.split(' ');
      let command = args.shift().substring(1);
      let extracommand = args.shift();

      if (command === 'roll') {
        let t = await CharSheetUtils.rollAsync(extracommand);
        CharSheetUtils.send(t);
      }

      else if(command === 'getattr') {
        if(!msg.selected) return;
        for (const s of msg.selected) {
          if (s._type !== 'graphic') continue;

          let token = getObj('graphic', s._id);
          if (!token) continue;
          let character =  getObj('character', token.get('represents'));

          let t = await CharSheetUtils.getSheetAttr(character, extracommand);
          CharSheetUtils.send(t);
        }
      }
    }
  };
})();

on('ready',function() {
  'use strict';

  on('chat:message', CharSheetUtils.handleInput);
});
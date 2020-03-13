module.exports = function () {
    return function tailwindPosthtmlClassExtractor (tree) {
      tree.walk(function(node) {
        if(node.tag) {
            if (node.attrs) {
                for (let [attr, value] of Object.entries(node.attrs)) {
                    let matches = attr.match('([a-zA-Z]+):class');

                    if (matches) {
                        let screen = matches[1];
                        let classes = value.split(" ");
                        
                        node.attrs.class = classes
                            .map(clss => `${screen}:${clss}`)
                            .concat(node.attrs.class.split(" "))
                            .join(" ");

                        delete node.attrs[matches[0]];
                    }
                }
            }
        }

        return node;
      });

      return tree
    }
  }
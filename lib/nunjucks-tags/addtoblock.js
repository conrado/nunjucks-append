var content = require('../content');

/**
 * AddToBlock the content of this tag to the named register.
 */
function AddToBlock() {
  this.tags = ['addtoblock'];

  this.parse = function(parser, nodes, lexer) {
    var token = parser.nextToken();

    var nodeList = new nodes.NodeList();
    nodeList.addChild(parser.parsePrimary());

    parser.advanceAfterBlockEnd(token.value);

    var body = parser.parseUntilBlocks('endaddtoblock');
    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, 'run', nodeList, [body]);
  };

  this.run = function(context, name, body) {
    content.add(name, body());
  };
}

module.exports = new AddToBlock();

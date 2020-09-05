const blocks = {};

function extendHelper(name, context) {
    let block = blocks[name];
    if (!block) {
        blocks[name] = [];
        block = blocks[name];
    }

    block.push(context.fn(this));
}

function blockHelper(name) {
    const val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
}

module.exports = {
    blockHelper,
    extendHelper,
};

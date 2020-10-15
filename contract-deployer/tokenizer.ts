require('source-map-support').install();

const parser = require('@solidity-parser/parser');

const input = `
    contract test {
        uint256 a;
        function f() {}
    }
`

function walk_ast(node: any) {
    switch (node.type) {
        case 'SourceUnit':
            for (const childNode of node.children) {
                console.log(childNode);
                walk_ast(childNode);
            }
            break;
        case 'ContractDefinition':
            for (const subNode of node.subNodes) {
                console.log(subNode);
                walk_ast(subNode);
            }
            break;
    }
}

try {
    const ast = parser.parse(input);
    walk_ast(ast);
} catch (e) {
    if (e instanceof parser.ParserError) {
        console.error(e.errors)
    }
}

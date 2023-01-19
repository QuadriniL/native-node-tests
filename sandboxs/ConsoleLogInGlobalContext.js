import vm from 'vm';

/*
 * as variaveis globais são acessíveis dentro do contexto da sandbox
 * por outro lado, as variaveis locais não são acessíveis no contexto da sandbox
*/

global.variable = 'Hello World';

var unAccessedVariable = 'Forbidden content';

const code = `
  console.log(variable);
  if (typeof unAccessedVariable === 'undefined') {
     console.log('unAccessedVariable is undefined');
  }
`;

const sandbox = {
  // o nome do arquivo é passado como parâmetro para o contexto da sandbox
  // para o mesmo ser passado na stack de erros do Node
  filename: `virtual_machines\ConsoleLogInGlobalContext.js`,
  // tambem é possivel utilizar timeout para o código ser executado
};

/*
  * Podemos tambem instanciar um vm.Script e executar o código dentro do contexto da sandbox com o método runInContext
  * const script = new vm.Script(code);
  *
  * script.runInThisContext(sandbox);
*/

vm.runInThisContext(code, sandbox);

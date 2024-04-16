# language: pt

Funcionalidade: Fluxo Cadastro

  Cenario: Realizar cadastro
    Dado que eu queira realizar cadastro
    Quando faço um POST com dados VALIDOS
    Então visualizo que o cadastro foi realizado e o código de status da resposta é <codigoStatus>

    Exemplos:
    | codigoStatus |
    | 201          |

  Cenario: Buscar todos cadastros
    Dado que eu queira listar todos cadastros
    Quando faço um GET
    Então visualizo que todos os cadastros foram listados e o código de status da resposta é <codigoStatus>

    Exemplos:
    | codigoStatus |
    | 200          |

  Cenario: Buscar cadastro especifico
    Dado que eu queira buscar usuario especifico
    Quando faço um GET passando um usuario especifico
    Então visualizo que trouxe apenas um usuario e o código de status da resposta é <codigoStatus>

    Exemplos:
    | codigoStatus |
    | 200          |

  Cenario: Deletar cadastro especifico
    Dado que eu queira deletar usuario por ID
    Quando faço um DEL passando um ID
    Então visualizo que o usuario especifico foi deletado e o código de status da resposta é <codigoStatus>

    Exemplos:
    | codigoStatus |
    | 200          |

  Cenario: Buscar todos backendPdv
    Dado que eu queira backendPdv
    Quando faço um POST com dados VALIDOS backendPdv
    Então visualizo que o cadastro foi realizado backendPdv e o código de status da resposta é <codigoStatus>

    Exemplos:
    | codigoStatus |
    | 200          |

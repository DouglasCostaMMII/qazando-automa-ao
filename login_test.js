
Funcionalidade('login');
Cenário('Login com sucesso',  ({I}) => {
    I.wait(5)
    I.fillField('~email','teste@teste.com')
    I.fillField('~senha','123456')
    I.tap('~entrar')
    I.waitForElement('~codigo','5')
    I.seeElement('~codigo')
});

Cenário('Login com erro', ({I}) => {
    I.wait(3)
    I.fillField('~email','xteste@teste.com')
    I.fillField('~senha','123456')
    I.tap('~entrar')
    I.waitForElement('~lognFail','3')
    I.seeElement('~lognFail')
});

Cenário ('Cadastrar pessoa', ({I}) => {

    I.wait(3)
    I.fillField('~email','teste@teste.com')
    I.fillField('~senha','123456')
    I.tap('~entrar')
    I.wait('2')
    I.seeElement('~codigo')
    I.fillField('~codigo','1235')
    I.fillField('~aluno','Douglas Costa')
    I.seeElement('~salvar')
    I.tap('~salvar','2')
    I.seeElement('~search')
    I.fillField('~search','Douglas Costa')
    I.pressKey('Enter')
    I.waitForElement('~1235','3')
    I.seeElement('Douglas Costa')
});

Cenário ('Cadastro sem nome ', ({I}) => {

    I.wait(3)
    I.fillField('~email','teste@teste.com')
    I.fillField('~senha','123456')
    I.tap('~entrar')
    I.wait('2')
    I.seeElement('~codigo')
    I.fillField('~codigo','1235')
    I.seeElement('~salvar')
    I.tap('~salvar','2')
    I.waitForElement('#android:id/alertTitle')
    I.seeElement('#android:id/alertTitle')

});


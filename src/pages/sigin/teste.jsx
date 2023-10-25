<Form>
<h1>Rocket Notes</h1>
<p>Aplicação para salvar e gerenciar seus links úteis.</p>
<h2>Faça seu login</h2>

<Input placeholder="Email" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
<Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

<Button title="Entrar" onClick={handleSignIn}>
</Button>
<Link to="/register">
    Criar Conta
</Link>
</Form>
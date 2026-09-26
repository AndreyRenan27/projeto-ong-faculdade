export function cadastro(app) {
    app.innerHTML = `
        <section>

            <h2>Cadastro de usuário</h2>

            <article>

                <h3>Formulário de cadastro</h3>

                <form>

                    <fieldset>
                        <legend>Dados Pessoais</legend>

                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required>

                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required>

                        <label for="date">Data de nascimento:</label>
                        <input type="date" id="date" name="date" required>

                    </fieldset>

                    <fieldset>

                        <legend>Contatos</legend>

                        <label for="tel">Telefone:</label>
                        <input type="tel" id="tel" name="tel" required>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>

                    </fieldset>

                    <fieldset>

                        <legend>Endereço</legend>

                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required>

                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" required>

                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>

                        <label for="estado">Estado:</label>

                        <select name="estado" id="estado" required>
                            <option value="">Selecione seu estado</option>
                            <option value="PB">Paraíba</option>
                            <option value="PE">Pernambuco</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="CE">Ceará</option>
                        </select>

                    </fieldset>

                    <fieldset>

                        <legend>Tipo de Engajamento</legend>

                        <input type="radio" id="doador" name="engajamento" value="doador" required>
                        <label for="doador">Doador</label>

                        <input type="radio" id="voluntario" name="engajamento" value="voluntario" required>
                        <label for="voluntario">Voluntário</label>

                    </fieldset>

                    <button type="submit">Enviar Cadastro</button>

                </form>

            </article>

        </section>

        <div class="alerta">
            Atenção: confira seus dados antes de enviar o cadastro.
        </div>

        <div class="toast">
            Cadastro realizado com sucesso!
        </div>

        <div class="modal">

            <div class="modal-conteudo">

                <h3>Cadastro concluído!</h3>

                <p>Seus dados foram enviados com sucesso.</p>

                <button type="button">Fechar</button>

            </div>

        </div>
    `;
}
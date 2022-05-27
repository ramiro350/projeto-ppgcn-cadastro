import './forgotPassword.css'

const forgotPassword = () => {
    return (
        <div className="forgotPassword col-sm-12 col-md-8 col-lg-3 align-items-center">
            <form className='passWordForm container-fluid'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nova Senha</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirmar Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn btn-primary">Enviar confirmação pro Email</button>
            </form>
        </div>
    )
}

export default forgotPassword;
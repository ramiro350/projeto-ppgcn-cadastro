import './Header.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Image } from 'cloudinary-react'
import TestaCPF from './validarCPF'
import Logo from './Logo';
import Footer from './Footer';
//import user from '../../user/userCrud'

// function  salvar() {
//     var strCPF = document.getElementById('cpf') 
//     console.log(strCPF)
// }

const baseUrl = "https://api.cloudinary.com/v1_1/dkmqmjwdl/upload"
const initialValue = {
    nome: '',
    nomeMae: '',
    nomePai: '',
    naturalidade: '',
    uf: '',
    nacionalidade: '',
    dataDeNascimento: '',
    estadoCivil: '',
    rg: '',
    expedidor: '',
    dataDeExpedicao: '',
    cpf: '',
    endereco: '',
    bairro: '',
    cep: '',
    cidade: '',
    telefoneResidencial: null,
    telefone: '',
    email1: '',
    email2: null,
    cursoDeGraduacao1: '',
    instituicaoGrad1: '',
    conclusaoGrad1: '',
    cursoDeGraduacao2: null,
    instituicaoGrad2: null,
    conclusaoGrad2: null,
    cursoDeEspecializacao: null,
    instituicaoEsp: null,
    conclusaoEsp: null,
    linhaDePesquisa: '',
    tipoBolsa1: null,
    orgaoDeFomento1: null,
    periodo1: null,
    tipoBolsa2: null,
    orgaoDeFomento2: null,
    periodo2: null,
    disciplinaMonitoria1: null,
    departamentoMonit1: null,
    periodoMonit1: null,
    disciplinaMonitoria2: null,
    departamentoMonit2: null,
    periodoMonit2: null,
    trabalhara: false,
    exclusivo: false,
    concorreraABolsa: false,
    realizaraSemBolsa: false,
    // foto: '',
    // historicoEscolar: '',
    // diploma: ''
}

const PromotionForm = () => {
    const [values, setValues] = useState(initialValue)

    const navigate = useNavigate()

    function onChange(ev) {
        const { name, value } = ev.target
        setValues({ ...values, [name]: value })
    }

    function check1() {
        if (document.getElementById('cbk1').checked) {
            document.getElementById('cbk1').value = true
        } else {
            document.getElementById('cbk1').value = false
        }
    }

    function check2() {
        if (document.getElementById('cbk2').checked) {


            document.getElementById('cbk2').value = true

        } else {
            document.getElementById('cbk2').value = false
        }
    }

    function check3() {
        if (document.getElementById('cbk3').checked) {
            document.getElementById('cbk3').value = true
        } else {
            document.getElementById('cbk3').value = false
        }
    }

    function check4() {
        if (document.getElementById('cbk4').checked) {
            document.getElementById('cbk4').value = true
        } else {
            document.getElementById('cbk4').value = false
        }
    }

    function check5() {
        if (document.getElementById('cbk6').checked) {
            document.getElementById('reservista').setAttribute('disabled', 'true')
        } else {
            document.getElementById('reservista').setAttribute('disabled', 'false')
        }
    }


    const [foto, setfoto] = useState(null)
    const [historicoEscolar, sethistoricoEscolar] = useState(null)
    const [diploma, setDiploma] = useState(null)
    const [vinculoUece, setvinculoUece] = useState(null)
    const [identificacao, setidentificacao] = useState(null)
    const [ComprovanteVotacao, setCompEleit] = useState(null)
    const [Lattes, setLattes] = useState(null)
    const [formInscricao, setFormInsc] = useState(null)
    const [reservista, setReservista] = useState(null)



    async function onSubmit(ev) {
        ev.preventDefault()
        const formData_ = new FormData()

        formData_.append('dados', JSON.stringify(values))
        let imgs = document.body.querySelectorAll('input[type=file]')
        console.log(imgs)
        let filesImgs = [foto, historicoEscolar, diploma, vinculoUece, identificacao, ComprovanteVotacao, Lattes, formInscricao, reservista]
        let filesUrls = [null, null, null, null, null, null, null, null, null]
        console.log(filesImgs)
        for (let i = 0; i < filesImgs.length; i++) {
            if (filesImgs[i]) {
                const formData = new FormData()
                formData.append('file', filesImgs[i])
                formData.append("tags", `codeinfuse, medium, gist`)
                // formData.append("cloud_name", "dkmqmjwdl")
                formData.append('upload_preset', 'rfnjtzg4')
                // formData.append('api_key', '164499867998182')
                formData.append("timestamp", (Date.now() / 1000) || 0)
                // formData.append('api_secret', '18P6dQVqpzC5bcyF3-LQ3J7jc8M')
                await axios({
                    method: "post",
                    url: baseUrl,
                    data: formData,
                    headers: { "X-Requested-With": "XMLHttpRequest" },
                    // headers: {     
                    //     "Content-Type": "application/x-www-form-urlencoded",               
                    //     },
                })
                    .then(response => {
                        //handle success
                         filesUrls[i] = response.data.secure_url
                        //  filesUrls[i] = 'https://www.google.com/'
                         console.log('a')
                    })
                    .catch(err => {
                    //    handle error
                        alert(err);
                    })
            }
        }
        console.log(filesUrls)
        let objUrl = {
            foto: filesUrls[0],
            historicoEscolar: filesUrls[1],
            documentosComprobatorios: filesUrls[2],
            vinculoUece: filesUrls[3],
            identificacao: filesUrls[4],
            ComprovanteVotacao: filesUrls[5],
            taxaOuIsencao: filesUrls[6],
            termo: filesUrls[7],
            reservista: filesUrls[8]
        }
        formData_.append('links', objUrl)
        // formData.append('file', historicoEscolar)
        // formData.append('file', diploma)
        // formData.append('file', vinculoUece)
        // formData.append('file', identificacao)
        // formData.append('file', ComprovanteVotacao)
        // formData.append('file', Lattes)
        // formData.append('file', formInscricao)
        // formData.append('file', reservista)


        axios({
            method: 'post',
            url: 'https://ppgcn.herokuapp.com/inscritos',
            data: {dados: values,
            links: objUrl},
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            console.log(res)
        }).catch(erro => {
            alert(erro)
        })
    }

    // let cpf = document.getElementById('cpf')
    // function validarCPF(cpf) {	
    //     cpf = cpf.replace(/[^\d]+/g,'');	
    //     if(cpf === '') return false;	
    //     // Elimina CPFs invalidos conhecidos	
    //     if (cpf.length !== 11 || 
    //         cpf === "00000000000" || 
    //         cpf === "11111111111" || 
    //         cpf === "22222222222" || 
    //         cpf === "33333333333" || 
    //         cpf === "44444444444" || 
    //         cpf === "55555555555" || 
    //         cpf === "66666666666" || 
    //         cpf === "77777777777" || 
    //         cpf === "88888888888" || 
    //         cpf === "99999999999")
    //             return false;		
    //     // Valida 1o digito	
    //     var add = 0;	
    //     for (let i=0; i < 9; i ++)		
    //         add += parseInt(cpf.charAt(i)) * (10 - i);	
    //         let rev = 11 - (add % 11);	
    //         if (rev === 10 || rev === 11)		
    //             rev = 0;	
    //         if (rev !== parseInt(cpf.charAt(9)))		
    //             return false;		
    //     // Valida 2o digito	
    //     add = 0;	
    //     for (let j = 0; j < 10; j ++)		
    //         add += parseInt(cpf.charAt(j)) * (11 - j);	
    //     rev = 11 - (add % 11);	
    //     if (rev === 10 || rev === 11)	
    //         rev = 0;	
    //     if (rev !== parseInt(cpf.charAt(10)))
    //         return false;		
    //     return true;   
    // }



    return (

        <header className='Header d-nome d-sm-flex flex-column'>
            <form onSubmit={onSubmit} name='fileinfo' >
                <p><strong>Formulário de Inscrição</strong></p>
                <div className='headerdiv1'>
                    <p>Dados Pessoais</p>
                    <div className='div2'>

                        <label >Nome:</label>&nbsp;&nbsp;
                        <input type='text' name='nome' placeholder='Nome' id='nome' maxLength={30} onChange={onChange} required></input>&nbsp;&nbsp;
                        <label >Nome da mãe:</label>&nbsp;&nbsp;
                        <input type='text' name='nomeMae' placeholder='Nome da mãe' id='nomedamae' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label >Nome do pai:</label><br />&nbsp;&nbsp;
                        <input type='text' name='nomePai' placeholder='Nome do pai' id='nomedopai' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label >Naturalidade:</label><br />&nbsp;&nbsp;
                        <input type='text' name='naturalidade' placeholder='Naturalidade' id='naturalidade' onChange={onChange} required></input><br />&nbsp;&nbsp;
                    </div>
                    <br />
                    <div className='div3'>

                        <label >UF:</label><br />&nbsp;&nbsp;
                        <input type='text' name='uf' placeholder='UF' id='uf' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label >Nacionalidade:</label><br />&nbsp;&nbsp;
                        <input type='text' name='nacionalidade' placeholder='Nacionalidade' id='nacionalidade' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label >Data de nascimento:</label><br />&nbsp;&nbsp;
                        <input type='text' name='dataDeNascimento' placeholder='dd/MM/yyyy' id='datenasc' onChange={onChange} required></input ><br />&nbsp;&nbsp;
                        <label >Estado Civil:</label><br />&nbsp;&nbsp;
                        <input type='text' name='estadoCivil' placeholder='Estado Civil' id='estciv' onChange={onChange} required></input><br />&nbsp;&nbsp;
                    </div>
                    <br />
                    <div className='div4'>

                        <label id='rg'>RG:</label>&nbsp;&nbsp;
                        <input type='text' name='rg' placeholder='RG' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='orgexp'>Orgão Expedidor:</label><br />&nbsp;&nbsp;
                        <input type='text' name='expedidor' placeholder='Orgão expedidor' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='dateexp'>Data de expedição:</label><br />&nbsp;&nbsp;
                        <input type='text' name='dataDeExpedicao' placeholder='Data de expedição' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label >CPF:</label><br />&nbsp;&nbsp;
                        <input type='text' name='cpf' placeholder='CPF' id='cpf' maxLength={11} onChange={onChange} required></input><br />&nbsp;&nbsp;
                    </div><br />

                    <div className='div5'>
                        <label id='endereco'>Endereço:</label>&nbsp;&nbsp;
                        <input type='text' name='endereco' placeholder='Endereço' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='bairro'>Bairro:</label><br />&nbsp;&nbsp;
                        <input type='text' name='bairro' placeholder='Bairro' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='cep'>CEP:</label><br />&nbsp;&nbsp;
                        <input type='text' name='cep' placeholder='CEP' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='cidade'>Cidade:</label><br />&nbsp;&nbsp;
                        <input type='text' name='cidade' placeholder='Cidade' onChange={onChange} required></input><br />&nbsp;&nbsp;
                    </div><br />

                    <div className='div6'>
                        <label id='telres'>Telefone Residencial:</label>&nbsp;&nbsp;
                        <input type='text' name='telefoneResidencial' placeholder='Telefone' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='cel'>Celular:</label><br />&nbsp;&nbsp;
                        <input type='text' name='telefone' placeholder='Celular' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='em1'>Email 1:</label><br />&nbsp;&nbsp;
                        <input type='email' name='email1' placeholder='Email 1' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='em2'>Email 2:</label><br />&nbsp;&nbsp;
                        <input type='email' name='email2' placeholder='Email 2' onChange={onChange}></input><br />&nbsp;&nbsp;
                    </div><br />
                </div>
                <div className='headerdiv2'>
                    <p>Formação Acadêmica</p><br />
                    <div className='div7'>
                        <label id='curgrad'>Curso de Graduação:</label>&nbsp;&nbsp;
                        <input type='text' name='cursoDeGraduacao1' placeholder='1ª graduação' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='insgrad'>Instituição:</label>&nbsp;&nbsp;
                        <input type='text' name='instituicaoGrad1' placeholder='1ª graduação' onChange={onChange} required></input><br />&nbsp;&nbsp;
                        <label id='anocon1'>Ano de Conclusão:</label>&nbsp;&nbsp;
                        <input type='text' name='conclusaoGrad1' placeholder='1ª graduação' onChange={onChange} required></input><br />&nbsp;&nbsp;
                    </div><br />
                    <div className='div18'>
                        <label id='curgrad2'>Curso de Graduação:</label>&nbsp;&nbsp;
                        <input type='text' name='cursoDeGraduacao2' placeholder='2ª graduação' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='insgrad'>Instituição:</label>&nbsp;&nbsp;
                        <input type='text' name='instituicaoGrad2' placeholder='2ª graduação' onChange={onChange} ></input><br />&nbsp;&nbsp;
                        <label id='anocon1'>Ano de Conclusão:</label>&nbsp;&nbsp;
                        <input type='text' name='conclusaoGrad2' placeholder='2ª graduação' onChange={onChange} ></input><br />&nbsp;&nbsp;
                    </div><br />
                    <div className='div8'>
                        <label id='curesp'>Curso de Especialização:</label>&nbsp;&nbsp;
                        <input type='text' name='cursoDeEspecializacao' placeholder='especialização' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='insesp'>Instituição:</label>&nbsp;&nbsp;
                        <input type='text' name='instituicaoEsp' placeholder='especialização' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='anocon2'>Ano de Conclusão:</label>&nbsp;&nbsp;
                        <input type='text' name='conclusaoEsp' placeholder='especialização' onChange={onChange}></input><br />&nbsp;&nbsp;
                    </div><br />
                </div>
                <div className='headerdiv3'>
                    <p>Linha de pesquisa pretendida</p>
                    <div className='div9'>
                        <label id='linpes'>Linha de pesquisa</label>&nbsp;&nbsp;
                        <select name='linhaDePesquisa' id='linpes' onChange={onChange} required>
                            <option ></option>
                            <option name='linhaDePesquisa'>Monitoramento de recursos naturais</option>
                            <option name='linhaDePesquisa'>Aproveitamento de recursos naturais</option>
                        </select>
                    </div><br />
                </div>
                <div className='headerdiv4'>
                    <p>Bolsas Recebidas</p>
                    <div className='div10'>
                        <label id='tipo1'>Tipo:</label>&nbsp;&nbsp;
                        <input type='text' name='tipoBolsa1' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='orgfor1'>Orgão de formento:</label>&nbsp;&nbsp;
                        <input type='text' name='orgaoDeFomento1' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='peri1'>Período:</label>&nbsp;&nbsp;
                        <input type='text' name='periodo1' onChange={onChange}></input><br />&nbsp;&nbsp;
                    </div><br />
                    <div className='div11'>
                        <label id='tipo2'>Tipo:</label>&nbsp;&nbsp;
                        <input type='text' name='tipoBolsa2' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='orgfor2'>Orgão de formento:</label>&nbsp;&nbsp;
                        <input type='text' name='orgaoDeFomento2' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='peri2'>Período:</label>&nbsp;&nbsp;
                        <input type='text' name='periodo2' onChange={onChange}></input><br />&nbsp;&nbsp;
                    </div><br />
                </div>
                <div className='headerdiv5'>
                    <p>Atividade de monitoria</p>
                    <div className='div12'>
                        <label id='disc1'>Disciplina:</label>&nbsp;&nbsp;
                        <input type='text' name='disciplinaMonitoria1' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='dep'>Departamento:</label>&nbsp;&nbsp;
                        <input type='text' name='departamentoMonit1' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='peri3'>Período:</label>&nbsp;&nbsp;
                        <input type='text' name='periodoMonit1' onChange={onChange}></input><br />&nbsp;&nbsp;
                    </div><br />
                    <div className='div13'>
                        <label id='disc2'>Disciplina:</label>&nbsp;&nbsp;
                        <input type='text' name='disciplinaMonitoria2' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='dep1'>Departamento:</label>&nbsp;&nbsp;
                        <input type='text' name='departamentoMonit2' onChange={onChange}></input><br />&nbsp;&nbsp;
                        <label id='peri4'>Período:</label>&nbsp;&nbsp;
                        <input type='text' name='periodoMonit2' onChange={onChange}></input><br />&nbsp;&nbsp;
                    </div><br />
                </div>
                <div className='headerdiv6'>
                    <p>Outras informações</p>
                    <div className='div14'>
                        <label className='cbk1' for='cbk1'>O candidato manterá vincúlo de trabalho durante o curso ?</label>&nbsp;&nbsp;
                        {/* <input type='hidden' id='cbk1' name='trabalhara' onChange={onChange} value='false'></input> */}
                        <input type='checkbox' id='cbk1' name='trabalhara' onChange={onChange} onClick={check1} ></input><br />&nbsp;&nbsp;
                        <label className='cbk2' for='cbk2'>O candidato pretende realizar o curso com dedicação exclusiva ?</label>&nbsp;&nbsp;
                        {/* <input type='hidden' id='cbk2' name='exclusivo' onChange={onChange} value='false'></input> */}
                        <input type='checkbox' id='cbk2' name='exclusivo' onChange={onChange} onClick={check2}></input><br />&nbsp;&nbsp;
                    </div>
                    <div className='div15 '>
                        <label className='cbk3' for='cbk3'>O candidato pretende concorrer a bolsa de estudos ?</label>&nbsp;&nbsp;
                        {/* <input type='hidden' id='cbk3' name='concorreraABolsa' onChange={onChange} value='false'></input> */}
                        <input type='checkbox' id='cbk3' name='concorreraABolsa' onChange={onChange} onClick={check3} ></input><br />&nbsp;&nbsp;
                        <label className='cbk4' for='cbk4'>O candidato pretende realizar o curso mesmo sem ser comtemplado com bolsa de estudos ?</label>&nbsp;&nbsp;
                        {/* <input type='hidden' id='cbk4' name='realizaraSemBolsa' onChange={onChange} value='false'></input> */}
                        <input type='checkbox' id='cbk4' name='realizaraSemBolsa' onChange={onChange} onClick={check4}></input><br />&nbsp;&nbsp;
                    </div>
                    <div className='div20 col-4'>
                        <div className="row ">

                            <label className='mx-2' for='cbk3'>Sexo:</label>&nbsp;&nbsp;
                            M <input className='mx-2' type='checkbox' id='cbk5' name='M' onChange={onChange}></input>&nbsp;&nbsp;
                            F <input className='mx-2' type='checkbox' id='cbk6' name='F' onChange={onChange} onClick={check5}></input>&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
                <div className='headerdiv7'>
                    <p>Foto</p>
                    <div className='div16'>
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image]" type='file' id='foto' name='foto' accept="image/*" onChange={e => setfoto(e.target.files[0]
                        )} ></input><br />
                    </div><br />
                </div>
                <div className='headerdiv9'>
                    <p>Anexos</p>
                    <div className='div19'>
                        <label className='hist'>Histórico Escolar</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image2]" type='file' id='historicoEscolar' name='historicoEscolar'  placeholder='Histórico Escolar' onChange={e => sethistoricoEscolar(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                        <label className='dipgrad'>Diploma de graduação</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image3]" type='file' id='diploma' name='diploma' accept="image/*" placeholder='Diploma de graduação' onChange={e => setDiploma(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                        <label className='vinculoUece'>Comprovante de vínculo com a instituição</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image4]" type='file' id='vinculoUece' name='vinculoUece' accept="image/*" placeholder='vinculoUece' onChange={e => setvinculoUece(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                        <label className='identificacao'>CPF</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image5]" type='file' id='identificacao' name='identificacao' accept="image/*" placeholder='identificacao' onChange={e => setidentificacao(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                        <label className='ComprovanteVotacao'>Comprovante de votação ou quitação eleitoral</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image6]" type='file' id='ComprovanteVotacao' name='ComprovanteVotacao' accept="image/*" placeholder='ComprovanteVotacao' onChange={e => setCompEleit(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                        <label className='Lattes'>Currículo Lattes + Documentos comprobatórios</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image7]" type='file' id='Lattes' name='Lattes' accept="image/*" placeholder='Lattes' onChange={e => setLattes(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                        <label className='formInscricao'>Formulário de Inscrição e termo preenchido</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image8]" type='file' id='formInscricao' name='formInscricao' accept="image/*" placeholder='formInscricao' onChange={e => setFormInsc(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                        <label className='reservista'>Reservista(Apenas candidatos do sexo masculino)</label>&nbsp;&nbsp;
                        <input class="cloudinary-fileupload" data-cloudinary-field="photo[image9]" type='file' id='reservista' name='reservista' accept="image/*" disabled={false} placeholder='reservista' onChange={e => setReservista(
                            e.target.files[0]
                        )} ></input><br />&nbsp;&nbsp;
                    </div>
                </div>
                <div className='headerdiv8'>
                    <p>Salvar dados</p>
                    <div className='div17'>
                        <button id='btn' name='btn' type='submit'>Salvar</button><br />
                    </div><br />
                </div>
            </form>
        </header>
    )

}
export default PromotionForm;





import './Header.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import TestaCPF from './validarCPF'
//import user from '../../user/userCrud'

// function  salvar() {
//     var strCPF = document.getElementById('cpf') 
//     console.log(strCPF)
// }

const baseUrl = 'http://localhost:3004/users'
const initialValue = {
    nome: '',
    nomedamae: '',
    nomedopai: '',
    naturalidade: '',
    uf: '',
    nacionalidade: '',
    datadenascimento: '',
    estadocivil: ''
}

const PromotionForm = () => {
    const [values, setValues] = useState(initialValue)
    const navigate = useNavigate()
    
    function onChange(ev) {
        const {name,value} = ev.target
        // console.log({name,value})
        setValues({...values, [name]: value})
    }
    
    
    //    function save(){
        //         const user = this.state.user
        //         const method = user.id ? 'put' : 'post'
        //         const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        //         axios[method](url,user)
        //             .then(resp => {
            //                 const list = this.getUpdatedList(resp.data)
            //                 this.setState({user: initialState.user, list})
            //             })
            //     }
            
            function onSubmit(ev) {
                ev.preventDefault()
                axios.post('http://localhost:3004/users', values)
                   .then((response) =>{
                           navigate('/')
                       })
                }
                
                
                    
                    return(
                        
                        <header className='Header d-nome d-sm-flex flex-column'>
             {/* <h1 className='mt-3'>
                 <i className={`fa fa-${props.icon}`}></i> {props.title}
                 </h1>
                <p className='lead text-muted'></p> {props.subtitle} */}
             <form  onSubmit={onSubmit} >
                 <p><strong>Formulário de Inscrição</strong></p>
             <div className='headerdiv1'>
                 <p>Dados Pessoais</p>
                 <div className='div2'>
    
                 <label >Nome:</label>&nbsp;&nbsp;
                 <input type={Text} name='nome' placeholder='Nome' id='nome' required maxLength={30} onChange={onChange}></input>&nbsp;&nbsp;
                 <label >Nome da mãe:</label><br/>&nbsp;&nbsp;
                 <input type={Text} name='nomedamae' placeholder='Nome da mãe' id='nomedamae' onChange={onChange}></input><br/>&nbsp;&nbsp;
                 <label id='nomedopai'>Nome do pai:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='Nome do pai' onChange={onChange}></input><br/>&nbsp;&nbsp;
                 <label id='naturalidade'>Naturalidade:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='Naturalidade' onChange={onChange}></input><br/>&nbsp;&nbsp;
                 </div>
                 <br/>
                 <div className='div3'>
    
                 <label id='uf'>UF:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='UF' onChange={onChange}></input><br/>&nbsp;&nbsp;
                 <label id='nacionalidade'>Nacionalidade:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='Nacionalidade' onChange={onChange}></input><br/>&nbsp;&nbsp;
                 <label id='datenasc'>Data de nascimento:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='dd/MM/yyyy' onChange={onChange}></input ><br/>&nbsp;&nbsp;
                 <label id='estciv'>Estado Civil:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='Estado Civil' onChange={onChange}></input><br/>&nbsp;&nbsp;
                 </div>
                 <br/>
                 <div className='div4'>
    
                 <label id='rg'>RG:</label>&nbsp;&nbsp;
                 <input type={Text} name='RG' placeholder='RG'></input><br/>&nbsp;&nbsp;
                 <label id='orgexp'>Orgão Expedidor:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='Orgão expedidor'></input><br/>&nbsp;&nbsp;
                 <label id='dateexp'>Data de expedição:</label><br/>&nbsp;&nbsp;
                 <input type={Date} placeholder='Data de expedição'></input><br/>&nbsp;&nbsp;
                 <label >CPF:</label><br/>&nbsp;&nbsp;
                 <input type={Text} placeholder='CPF' id='cpf'  maxLength={11}  ></input><br/>&nbsp;&nbsp;
                 </div><br/>
    
                 <div className='div5'>
                 <label id='endereço'>Endereço:</label>&nbsp;&nbsp;
                 <input type={Text} name='end' placeholder='Endereço'></input><br/>&nbsp;&nbsp;
                 <label id='bairro'>Bairro:</label><br/>&nbsp;&nbsp;
                 <input type={Text} name='bairro' placeholder='Bairro'></input><br/>&nbsp;&nbsp;
                 <label id='cep'>CEP:</label><br/>&nbsp;&nbsp;
                 <input type={Date} name='cep' placeholder='CEP'></input><br/>&nbsp;&nbsp;
                 <label id='cidade'>Cidade:</label><br/>&nbsp;&nbsp;
                 <input type={Text} name='cidade' placeholder='Cidade'></input><br/>&nbsp;&nbsp;
                 </div><br/>
    
                 <div className='div6'>
                 <label id='telres'>Telefone Residencial:</label>&nbsp;&nbsp;
                 <input type={Text} name='telres' placeholder='Telefone'></input><br/>&nbsp;&nbsp;
                 <label id='cel'>Celular:</label><br/>&nbsp;&nbsp;
                 <input type={Text} name='cel' placeholder='Celular'></input><br/>&nbsp;&nbsp;
                 <label id='em1'>Email 1:</label><br/>&nbsp;&nbsp;
                 <input type={'email'} name='em1' placeholder='Email 1'></input><br/>&nbsp;&nbsp;
                 <label id='em2'>Email 2:</label><br/>&nbsp;&nbsp;
                 <input type={'email'} name='em2' placeholder='Email 2'></input><br/>&nbsp;&nbsp;
                 </div><br/>
             </div>
             <div className='headerdiv2'>
                 <p>Formação Acadêmica</p><br/>
                 <div className='div7'>
                 <label id='curgrad'>Curso de Graduação:</label>&nbsp;&nbsp;
                 <input type={Text} name='curgrad'></input><br/>&nbsp;&nbsp;
                 <label id='anocon1'>Ano de Conclusão:</label>&nbsp;&nbsp;
                 <input type={Text} name='anocon1'></input><br/>&nbsp;&nbsp;
                 <label id='curesp'>Curso de Especialização:</label>&nbsp;&nbsp;
                 <input type={Text} name='curesp'></input><br/>&nbsp;&nbsp;
                 </div><br/>
                 <div className='div18'>
                 <label id='curgrad2'>Curso de Graduação:</label>&nbsp;&nbsp;
                 <input type={Text} name='curgrad2'></input><br/>&nbsp;&nbsp;
                 <label id='anocon3'>Ano de Conclusão:</label>&nbsp;&nbsp;
                 <input type={Text} name='anocon3'></input><br/>&nbsp;&nbsp;
                 <label id='curesp2'>Curso de Especialização:</label>&nbsp;&nbsp;
                 <input type={Text} name='curesp2'></input><br/>&nbsp;&nbsp;
                 </div><br/>
                 <div className='div8'>
                 <label id='insgrad'>Instituição:</label>&nbsp;&nbsp;
                 <input type={Text} name='ins'></input><br/>&nbsp;&nbsp;
                 <label id='insesp'>Instituição(Curso de especialização):</label>&nbsp;&nbsp;
                 <input type={Text} name='insesp'></input><br/>&nbsp;&nbsp;
                 <label id='anocon2'>Ano de Conclusão(Curso de especialização):</label>&nbsp;&nbsp;
                 <input type={Text} name='anocon2'></input><br/>&nbsp;&nbsp;
                 </div><br/>
             </div>
             <div className='headerdiv3'>
                 <p>Linha de pesquisa pretendida</p>
                 <div className='div9'>
                     <label id='linpes'>Linha de pesquisa</label>&nbsp;&nbsp;
                     <select name='linpes' id='linpes'>
                         <option>Aproveitamento de recursos naturais</option>
                         <option>Monitoramento de recursos naturais</option>
                     </select>
                 </div><br/>
             </div>
             <div className='headerdiv4'>
                 <p>Bolsas Recebidas</p>
                 <div className='div10'>
                 <label id='tipo1'>Tipo:</label>&nbsp;&nbsp;
                 <input type={Text} name='tipo1'></input><br/>&nbsp;&nbsp;
                 <label id='orgfor1'>Orgão de formento:</label>&nbsp;&nbsp;
                 <input type={Text} name='orgfor1'></input><br/>&nbsp;&nbsp;
                 <label id='peri1'>Período:</label>&nbsp;&nbsp;
                 <input type={Text} name='peri1'></input><br/>&nbsp;&nbsp;
                 </div><br/>
                 <div className='div11'>
                 <label id='tipo2'>Tipo:</label>&nbsp;&nbsp;
                 <input type={Text} name='tipo2'></input><br/>&nbsp;&nbsp;
                 <label id='orgfor2'>Orgão de formento:</label>&nbsp;&nbsp;
                 <input type={Text} name='orgfor2'></input><br/>&nbsp;&nbsp;
                 <label id='peri2'>Período:</label>&nbsp;&nbsp;
                 <input type={Text} name='peri2'></input><br/>&nbsp;&nbsp;
                 </div><br/>
             </div>
             <div className='headerdiv5'>
                 <p>Atividade de monitoria</p>
                 <div className='div12'>
                 <label id='disc1'>Disciplina:</label>&nbsp;&nbsp;
                 <input type={Text} name='disc1'></input><br/>&nbsp;&nbsp;
                 <label id='dep'>Departamento:</label>&nbsp;&nbsp;
                 <input type={Text} name='dep'></input><br/>&nbsp;&nbsp;
                 <label id='peri3'>Período:</label>&nbsp;&nbsp;
                 <input type={Text} name='peri3'></input><br/>&nbsp;&nbsp;
                 </div><br/>
                 <div className='div13'>
                 <label id='disc2'>Disciplina:</label>&nbsp;&nbsp;
                 <input type={Text} name='disc2'></input><br/>&nbsp;&nbsp;
                 <label id='dep1'>Departamento:</label>&nbsp;&nbsp;
                 <input type={Text} name='dep2'></input><br/>&nbsp;&nbsp;
                 <label id='peri4'>Período:</label>&nbsp;&nbsp;
                 <input type={Text} name='peri4'></input><br/>&nbsp;&nbsp;
                 </div><br/>
             </div>
             <div className='headerdiv6'>
                 <p>Outras informações</p>
                 <div className='div14'>
                     <label className='cbk1' for='cbk1'>O candidato manterá vincúlo de trabalho durante o curso ?</label>&nbsp;&nbsp;
                     <input type={'checkbox'} id='cbk1' name='cbk1'></input><br/>&nbsp;&nbsp;
                     <label className='cbk2' for='cbk2'>O candidato pretende realizar o curso com dedicação exclusiva ?</label>&nbsp;&nbsp;
                     <input type={'checkbox'} id='cbk2' name='cbk2'></input><br/>&nbsp;&nbsp;
                 </div>
                 <div className='div15'>
                 <label className='cbk3' for='cbk3'>O candidato pretende concorrer a bolsa de estudos ?</label>&nbsp;&nbsp;
                     <input type={'checkbox'} id='cbk3' name='cbk3'></input><br/>&nbsp;&nbsp;
                     <label className='cbk4' for='cbk4'>O candidato pretende realizar o curso mesmo sem ser comtemplado com bolsa de estudos ?</label>&nbsp;&nbsp;
                     <input type={'checkbox'} id='cbk4' name='cbk4'></input><br/>&nbsp;&nbsp;
                 </div>
             </div>
             <div className='headerdiv7'>
                 <p>Foto</p>
                 <div className='div16'>
                     <input type={'file'} accept='image/jpeg,image/png'></input><br/>
                 </div><br/>
             </div>
             <div className='headerdiv9'>
                 <p>Anexos</p>
                 <div className='div19'>
                     <label className='hist'>Histórico Escolar</label>&nbsp;&nbsp;
                     <input type={'file'} accept='.pdf' placeholder='Histórico Escolar'></input><br/>&nbsp;&nbsp;
                     <label className='dipgrad'>Diploma de graduação</label>&nbsp;&nbsp;
                     <input type={'file'} accept='.pdf' placeholder='Diploma de graduação'></input><br/>&nbsp;&nbsp;
                 </div>
             </div>
             <div className='headerdiv8'>
                 <p>Salvar arquivos</p>
                 <div className='div17'>
                     <button  id='btn' name='btn' type='submit'>Salvar</button><br/>
                 </div><br/>
             </div>
             </form>
         </header>
    )

}
export default PromotionForm;





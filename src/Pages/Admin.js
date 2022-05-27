import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../componentes/templates/Footer";
import '../Pages/Admin.css'

async function getData(e) {

    console.log(axios.defaults.headers)
    console.log(localStorage)
    console.log(localStorage.getItem('token'))
    const auth = localStorage.getItem('token')
    JSON.stringify(localStorage.getItem('token'))
    console.log(auth)
    e.preventDefault()
    // document.getElementById('tbl').setAttribute("display", "block")
    await axios.get('https://ppgcn.herokuapp.com/inscritos',
    {headers : {'authorization': auth}})
        .then(res =>  {
            console.log(res)
            let arr = res.data
            console.log(arr)
            let length = res.data.length
            buildTable(length,arr)
            console.log('Ok')
        }).catch(err =>{
            console.log(err)
        })

}

function buildTable(length,arr){
    var table = document.createElement('table')
    var tr = document.createElement('tr')
      table.appendChild(tr);
      
      for (var i = 0; i < length; i++) {
        var tr = document.createElement('tr');
      
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');
        var td10 = document.createElement('td');
        var td11 = document.createElement('td');
        var td12 = document.createElement('td');
        var td13 = document.createElement('td');
        var td14 = document.createElement('td');
        var td15 = document.createElement('td');
        var td16 = document.createElement('td');
        var td17 = document.createElement('td');
        var td18 = document.createElement('td');
        var td19 = document.createElement('td');
        var td20 = document.createElement('td');
        var td21 = document.createElement('td');
        var td22 = document.createElement('td');
        var td23 = document.createElement('td');
        var td24 = document.createElement('td');
        var td25 = document.createElement('td');
        var td26 = document.createElement('td');
        var td27 = document.createElement('td');
        var td28 = document.createElement('td');
        var td29 = document.createElement('td');
        var td30 = document.createElement('td');
        var td31 = document.createElement('td');
        var td32 = document.createElement('td');
        var td33 = document.createElement('td');
        var td34 = document.createElement('td');
        var td35 = document.createElement('td');
        var td36 = document.createElement('td');
        var td37 = document.createElement('td');
        var td38 = document.createElement('td');
        var td39 = document.createElement('td');
        var td40 = document.createElement('td');
        var td41 = document.createElement('td');
        var td42 = document.createElement('td');
        var td43 = document.createElement('td');
        var td44 = document.createElement('td');
        var td45 = document.createElement('td');
        var td46 = document.createElement('td');
        var td47 = document.createElement('td');
        var td48 = document.createElement('td');
        var td49 = document.createElement('td');
        var td50 = document.createElement('td');
        var td51 = document.createElement('td');
        var td52 = document.createElement('td');
        var td53 = document.createElement('td');

        td1.setAttribute("class","col-4")
        td2.setAttribute("class","col-4")
        td3.setAttribute("class","col-4")
        td4.setAttribute("class","col-4")
        td5.setAttribute("class","col-4")
        td6.setAttribute("class","col-4")
        td7.setAttribute("class","col-4")
        td8.setAttribute("class","col-4")
        td9.setAttribute("class","col-4")
        td10.setAttribute("class","col-4")
        td11.setAttribute("class","col-4")
        td12.setAttribute("class","col-4")
        td13.setAttribute("class","col-4")
        td14.setAttribute("class","col-4")
        td15.setAttribute("class","col-4")
        td16.setAttribute("class","col-4")
        td17.setAttribute("class","col-4")
        td18.setAttribute("class","col-4")
        td19.setAttribute("class","col-4")
        td20.setAttribute("class","col-4")
        td21.setAttribute("class","col-4")
        td22.setAttribute("class","col-4")
        td23.setAttribute("class","col-4")
        td24.setAttribute("class","col-4")
        td25.setAttribute("class","col-4")
        td26.setAttribute("class","col-4")
        td27.setAttribute("class","col-4")
        td28.setAttribute("class","col-4")
        td29.setAttribute("class","col-4")
        td30.setAttribute("class","col-4")
        td31.setAttribute("class","col-4")
        td32.setAttribute("class","col-4")
        td33.setAttribute("class","col-4")
        td34.setAttribute("class","col-4")
        td35.setAttribute("class","col-4")
        td36.setAttribute("class","col-4")
        td37.setAttribute("class","col-4")
        td38.setAttribute("class","col-4")
        td39.setAttribute("class","col-4")
        td40.setAttribute("class","col-4")
        td41.setAttribute("class","col-4")
        td42.setAttribute("class","col-4")
        td43.setAttribute("class","col-4")
        td44.setAttribute("class","col-4")
        td45.setAttribute("class","col-4")
        td46.setAttribute("class","col-4")
        td47.setAttribute("class","col-4")
        td48.setAttribute("class","col-4")
        td49.setAttribute("class","col-4")
        td50.setAttribute("class","col-4")
        td51.setAttribute("class","col-4")
        td52.setAttribute("class","col-4")
        td53.setAttribute("class","col-4")
      
        var text1 = document.createTextNode(arr[i].nome);
        var text2 = document.createTextNode(arr[i].linhaDePesquisa);
        var text3 = document.createTextNode(arr[i].linhaDePesquisa);
        var text4 = document.createTextNode(arr[i].nomeMae);
        var text5 = document.createTextNode(arr[i].nomePai);
        var text6 = document.createTextNode(arr[i].naturalidade);
        var text7 = document.createTextNode(arr[i].uf);
        var text8 = document.createTextNode(arr[i].nacionalidade);
        var text9 = document.createTextNode(arr[i].dataDeNascimento);
        var text10 = document.createTextNode(arr[i].estadoCivil);
        var text11 = document.createTextNode(arr[i].rg);
        var text12 = document.createTextNode(arr[i].expedidor);
        var text13 = document.createTextNode(arr[i].dataDeExpedicao);
        var text14 = document.createTextNode(arr[i].cpf);
        var text15 = document.createTextNode(arr[i].endereco);
        var text16 = document.createTextNode(arr[i].bairro);
        var text17 = document.createTextNode(arr[i].cep);
        var text18 = document.createTextNode(arr[i].cidade);
        var text19 = document.createTextNode(arr[i].telofone);
        var text20 = document.createTextNode(arr[i].celular);
        var text21 = document.createTextNode(arr[i].email1);
        var text22 = document.createTextNode(arr[i].email2);
        var text23 = document.createTextNode(arr[i].cursoDeGraduacao1);
        var text24 = document.createTextNode(arr[i].instituicaoGrad1);
        var text25 = document.createTextNode(arr[i].conclusaoGrad1);
        var text26 = document.createTextNode(arr[i].cursoDeGraduacao2);
        var text27 = document.createTextNode(arr[i].instituicaoGrad2);
        var text28 = document.createTextNode(arr[i].conclusaoGrad2);
        var text29 = document.createTextNode(arr[i].tipoBolsa1);
        var text30 = document.createTextNode(arr[i].orgaoDeFomento1);
        var text31 = document.createTextNode(arr[i].periodo1);
        var text29 = document.createTextNode(arr[i].tipoBolsa2);
        var text30 = document.createTextNode(arr[i].orgaoDeFomento2);
        var text31 = document.createTextNode(arr[i].periodo2);
        var text32 = document.createTextNode(arr[i].disciplinaMonitoria1);
        var text33 = document.createTextNode(arr[i].departamentoMonit1);
        var text34 = document.createTextNode(arr[i].periodoMonit1);
        var text35 = document.createTextNode(arr[i].disciplinaMonitoria2);
        var text36 = document.createTextNode(arr[i].departamentoMonit2);
        var text37 = document.createTextNode(arr[i].periodoMonit2);
        var text38 = document.createTextNode(arr[i].periodoMonit2);
        var text39 = document.createTextNode(arr[i].periodoMonit2);
        var text40 = document.createTextNode(arr[i].periodoMonit2);
        var text41 = document.createTextNode(arr[i].trabalhara);
        var text42 = document.createTextNode(arr[i].exclusivo);
        var text43 = document.createTextNode(arr[i].concorreraABolsa);
        var text44 = document.createTextNode(arr[i].realizaraSemBolsa);
        var text45 = document.createTextNode(arr[i].foto);
        var text46 = document.createTextNode(arr[i].historicoEscolar);
        var text47 = document.createTextNode(arr[i].diploma);
        var text48 = document.createTextNode(arr[i].vinculoUece);
        var text49 = document.createTextNode(arr[i].identificacao);
        var text50 = document.createTextNode(arr[i].ComprovanteVotacao);
        var text51 = document.createTextNode(arr[i].documentosComprobatorios);
        var text52 = document.createTextNode(arr[i].termo);
        var text53 = document.createTextNode(arr[i].reservista);
      
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        td6.appendChild(text6);
        td7.appendChild(text7);
        td8.appendChild(text8);
        td9.appendChild(text9);
        td10.appendChild(text10);
        td11.appendChild(text11);
        td12.appendChild(text12);
        td13.appendChild(text13);
        td14.appendChild(text14);
        td15.appendChild(text15);
        td16.appendChild(text16);
        td17.appendChild(text17);
        td18.appendChild(text18);
        td19.appendChild(text19);
        td20.appendChild(text20);
        td21.appendChild(text21);
        td22.appendChild(text22);
        td23.appendChild(text23);
        td24.appendChild(text24);
        td25.appendChild(text25);
        td26.appendChild(text26);
        td27.appendChild(text27);
        td28.appendChild(text28);
        td29.appendChild(text29);
        td30.appendChild(text30);
        td31.appendChild(text31);
        td32.appendChild(text32);
        td33.appendChild(text33);
        td34.appendChild(text34);
        td35.appendChild(text35);
        td36.appendChild(text36);
        td37.appendChild(text37);
        td38.appendChild(text38);
        td39.appendChild(text39);
        td40.appendChild(text40);
        td41.appendChild(text41);
        td42.appendChild(text42);
        td43.appendChild(text43);
        td44.appendChild(text44);
        td45.appendChild(text45);
        td46.appendChild(text46);
        td47.appendChild(text47);
        td48.appendChild(text48);
        td49.appendChild(text49);
        td50.appendChild(text50);
        td51.appendChild(text51);
        td52.appendChild(text52);
        td53.appendChild(text53);
      
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        tr.appendChild(td10);
        tr.appendChild(td11);
        tr.appendChild(td12);
        tr.appendChild(td13);
        tr.appendChild(td14);
        tr.appendChild(td15);
        tr.appendChild(td16);
        tr.appendChild(td17);
        tr.appendChild(td18);
        tr.appendChild(td19);
        tr.appendChild(td20);
        tr.appendChild(td21);
        tr.appendChild(td22);
        tr.appendChild(td23);
        tr.appendChild(td24);
        tr.appendChild(td25);
        tr.appendChild(td26);
        tr.appendChild(td27);
        tr.appendChild(td28);
        tr.appendChild(td29);
        tr.appendChild(td30);
        tr.appendChild(td31);
        tr.appendChild(td32);
        tr.appendChild(td33);
        tr.appendChild(td34);
        tr.appendChild(td35);
        tr.appendChild(td36);
        tr.appendChild(td37);
        tr.appendChild(td38);
        tr.appendChild(td39);
        tr.appendChild(td40);
        tr.appendChild(td41);
        tr.appendChild(td42);
        tr.appendChild(td43);
        tr.appendChild(td44);
        tr.appendChild(td45);
        tr.appendChild(td46);
        tr.appendChild(td47);
        tr.appendChild(td48);
        tr.appendChild(td49);
        tr.appendChild(td50);
        tr.appendChild(td51);
        tr.appendChild(td52);
        tr.appendChild(td53);
      
        table.appendChild(tr);
      }
      table.setAttribute("class","table-container-fluid text-center col-12 mt-3  table bg-white")
      
      document.getElementById('alunos').appendChild(table)
}


const Adm = () => {
    return (
        
        <div >

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class=" navbar-brand" href="#">Admnistração</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Turmas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" onClick={getData}>Alunos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid" style={{"height": "90vh"}} id='teste'>
                <table class="table-container-fluid text-center col-12 mt-3  table" style={{ "color": "blue"}} id="tbl">
                    <thead >
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Turma</th>
                            <th scope="col">1ª Graduação</th>
                            <th scope="col">Nome da mãe</th>
                            <th scope="col">Nome do pai</th>
                            <th scope="col">Naturalidade</th>
                            <th scope="col">UF</th>
                            <th scope="col">Nacionalidade</th>
                            <th scope="col">Nascimento</th>
                            <th scope="col">Estado Civil</th>
                            <th scope="col">RG</th>
                            <th scope="col">Orgão Expedidor</th>
                            <th scope="col">Data de expedição</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">CEP</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div className="col-12" id="alunos"></div>
                <div className="col-12" id="turmas"></div>
            </div>

            <Footer />
        </div>
    )
}

export default Adm;

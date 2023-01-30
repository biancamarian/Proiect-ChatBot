import PropTypes from 'prop-types';
import React,{Component} from 'react';
import ChatBot from 'react-simple-chatbot';


class ReviewCash extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        venit: '',
        timp: '',
        suma: '',
        cheltuieli:'',
        cash:''
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { venit, timp, suma, cheltuieli,cash } = steps;
  
      this.setState({ venit, timp, suma, cheltuieli,cash });
    }
  
    render() {
      const { venit, timp, suma, cheltuieli,cash } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Sumar</h3>
          <table>
            <tbody>
              <tr>
                <td>Venit:</td>
                <td>{venit.value}</td>
              </tr>
              <tr>
                <td>Numarul de luni in care ai vrea sa achizitionezi</td>
                <td>{timp.value}</td>
              </tr>
              <tr>
                <td>Suma pe care esti dispus sa o platesti</td>
                <td>{suma.value}</td>
              </tr>
              <tr>
                <td>Total cheltuieli</td>
                <td>{cheltuieli.value}</td>
              </tr>
              <tr>
                <td>Suma de economisit</td>
                <td>{
                  (suma.value-cash.value)/timp.value>venit.value-cheltuieli.value ? 'Nu poti economisii' : (suma.value-cash.value)/timp.value
                }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  class ReviewCredit extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        venit: '',
        timp: '',
        suma: '',
        cheltuieli:'',
        credit:'',
        cash:'',
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { venit, timp, suma, cheltuieli,credit,cash } = steps;
  
      this.setState({ venit, timp, suma, cheltuieli,credit,cash });
    }
  
    render() {
      const { venit, timp, suma, cheltuieli,credit,cash } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Sumar</h3>
          <table>
            <tbody>
              <tr>
                <td>Venit:</td>
                <td>{venit.value}</td>
              </tr>
              <tr>
                <td>Numarul de luni in care ai vrea sa achizitionezi</td>
                <td>{timp.value}</td>
              </tr>
              <tr>
                <td>Suma pe care esti dispus sa o platesti</td>
                <td>{suma.value}</td>
              </tr>
              <tr>
                <td>Total cheltuieli</td>
                <td>{cheltuieli.value}</td>
              </tr>
              <tr>
                <td>Suma de economisit</td>
                <td>{
                  (suma.value-credit.value)/timp.value>venit.value-cheltuieli.value ? 'Nu poti economisii' : (suma.value-cash.value)/timp.value
                }
                </td>
              </tr>
               <tr>
                  <td>Avans</td>
                  <td>{(suma.value*0.15)}</td>
                  </tr>
                <tr>
                  <td>Suma obtinuta din credit</td>
                  <td>{(suma.value-suma.value*0.15)}</td>
                  </tr>
                <tr>
                  <td>Rata Aproximativa</td>
                  <td>{(suma.value-suma.value*0.15)*2/credit.value*12}</td>  
                   </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  class ReviewStingereCredit extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        venit:'',
        cheltuieli:'',
        sumaImpumutata: '',
        anCredit: '',
        rataValoare: '',
        dobanda:'',
        sumaRestanta:''
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { sumaImpumutata, anCredit, rataValoare, dobanda,sumaRestanta,venit,cheltuieli } = steps;
  
      this.setState({ sumaImpumutata, anCredit, rataValoare, dobanda,sumaRestanta,venit,cheltuieli });
    }
  
    render() {
      const { sumaImpumutata, anCredit, rataValoare, dobanda,venit,cheltuieli,sumaRestanta } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Sumar</h3>
          <table>
            <tbody>
              <tr>
                <td>Suma Imprumutata:</td>
                <td>{sumaImpumutata.value}</td>
              </tr>
              <tr>
                <td>Pe cati ani s-a acordat creditul?</td>
                <td>{anCredit.value}</td>
              </tr>
              <tr>
                <td>Cu rata lunara de </td>
                <td>{rataValoare.value}</td>
              </tr>
              <tr>
                <td>Cu o dobanda de</td>
                <td>{dobanda.value}</td>
              </tr>
              <tr>
                <td>Suma care a mai ramas de platit</td>
                <td>{sumaRestanta.value}
                </td>
              </tr>
              <tr>
                <td>Suma de economisit</td>
                <td>{
                    (sumaRestanta.value/anCredit.value*12>venit.value-cheltuieli.value? "Nu poti economisii la acest venit/cheltuieli" : sumaRestanta.value/anCredit.value*12)
                }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  class ReviewSiguranta extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        venit: '',
        sumaSiguranta: '',
        timpObtinere: '',
        cheltuieli:''
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { venit, sumaSiguranta, timpObtinere, cheltuieli, } = steps;
  
      this.setState({  venit, sumaSiguranta, timpObtinere, cheltuieli, });
    }
  
    render() {
      const { venit, sumaSiguranta, timpObtinere, cheltuieli, } = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Sumar</h3>
          <table>
            <tbody>
              <tr>
                <td>Venit:</td>
                <td>{venit.value}</td>
              </tr>
              <tr>
                <td>Suma pe care o consideri de siguranta</td>
                <td>{sumaSiguranta.value}</td>
              </tr>
              <tr>
                <td>In cat timp vrei sa o obti</td>
                <td>{timpObtinere.value}</td>
              </tr>
              <tr>
                <td>Total cheltuieli</td>
                <td>{cheltuieli.value}</td>
              </tr>
              <tr>
                <td>Suma de economisit</td>
                <td>{
                  (sumaSiguranta.value)/timpObtinere.value*12>venit.value-cheltuieli.value ? 'Nu poti economisi' : (sumaSiguranta.value)/timpObtinere.value*12
                }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  class ReviewPensie extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        venit: '',
        varstaActuala: '',
        varstaPensionare: '',
        venitPensionare:'',
        cheltuieli:''
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const { venit, varstaActuala, varstaPensionare, venitPensionare, cheltuieli } = steps;
  
      this.setState({  venit, varstaActuala, varstaPensionare, venitPensionare, cheltuieli });
    }
  
    render() {
      const { venit, varstaActuala, varstaPensionare, venitPensionare, cheltuieli} = this.state;
      return (
        <div style={{ width: '100%' }}>
          <h3>Sumar</h3>
          <table>
            <tbody>
              <tr>
                <td>Venit:</td>
                <td>{venit.value}</td>
              </tr>
              <tr>
                <td>Varsta actuala</td>
                <td>{varstaActuala.value}</td>
              </tr>
              <tr>
                <td>Ani pana la pensionare</td>
                <td>{varstaPensionare.value-varstaActuala.value}</td>
              </tr>
              <tr>
                <td>Cat vrei sa primesti lunar la pensie</td>
                <td>{venitPensionare.value}</td>
              </tr>
              <tr>
                <td>Suma de economisit</td>
                <td>{
                  (venitPensionare.value*240/((65-varstaActuala.value)*12))>venit.value-cheltuieli.value ? 'Nu poti economisi' :  (venitPensionare.value*240/((65-varstaActuala.value)*12))
                }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }






  ReviewCredit.propTypes = {
    steps: PropTypes.object,
  };
  
  ReviewCredit.defaultProps = {
    steps: undefined,
  };

  ReviewCash.propTypes = {
    steps: PropTypes.object,
  };
  
  ReviewCash.defaultProps = {
    steps: undefined,
  };
  
  ReviewStingereCredit.propTypes = {
    steps: PropTypes.object,
  };
  
  ReviewStingereCredit.defaultProps = {
    steps: undefined,
  };

  ReviewSiguranta.propTypes = {
    steps: PropTypes.object,
  };
  
  ReviewSiguranta.defaultProps = {
    steps: undefined,
  };

  ReviewPensie.propTypes = {
    steps: PropTypes.object,
  };
  
  ReviewPensie.defaultProps = {
    steps: undefined,
  };


  class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
        userAvatar={'https://png.pngtree.com/element_our/20200611/ourmid/pngtree-squinting-doggie-cute-expression-pack-image_2251654.jpg'}
        height="600px"
        width="700px"
        background= "transparent !important"
        steps={[
            {
              id: '1',
              message: 'Cum te numesti?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              validator: (value) => {
                if (!/^[a-zA-Z]+$/.test(value)||value.length<3) {
                  return 'Numele trebuie sa contina cel putin 3 LITERE';
                }
                return true
              },
              trigger: '3',
            },
            {
              id: '3',
              message: 'Buna {previousValue}!',
              trigger: '4',
            },
            {
              id: '4',
              message: 'Ma numesc Adema si sunt consultantul tau financiar',
              trigger: '5',
            },
            {
              id: '5',
              message: 'Inainte de toate, as avea nevoie de cateva informatii',
              trigger: '6',
            },
            {
              id:'6',
              message:'Venitul tau lunar(RON):',
              trigger:'venit',
             },
             {
               id: 'venit',
               user: true,
               validator: (value)=>{
                if (isNaN(value)||value<0) {
                  return 'Valoarea trebuie sa fie un numar pozitiv';
                }
                return true;
               },
               trigger: '7',
             },
             {
               id:'7',
               message:'Cheltuieli lunare(RON):',
               trigger:'cheltuieli',
             },
             {
               id: 'cheltuieli',
               user: true,
               validator: (value)=>{
                if (isNaN(value)||value<0) {
                  return 'Valoarea trebuie sa fie un numar pozitiv';
                }
                return true;
               },
               trigger: '8',
             },
            {
              id: '8',
              message: 'Cu ce te pot ajuta?',
              trigger:'9',
            },
            {
              id: '9',
              options: [
                { value: 1, label: 'Obtinerea unei locuinte', trigger: 'locuinta' },
                { value: 2, label: 'Stingerea anticipata a creditului', trigger: 'stingereCredit' },
                { value: 3, label: 'Obtinerea sigurantei financiare', trigger: 'siguranta' },
                { value: 4, label: 'Retragearea anticipata din activitate', trigger: 'pensie' },
              ],
            },
            {
              id:'locuinta',
              message:'Numarul de luni in care ai vrea sa achizitionezi',
              trigger:'timp',
            },
            {
              id: 'timp',
              user: true,
              validator: (value)=>{
                if (isNaN(value)||value<0) {
                  return 'Valoarea trebuie sa fie un numar pozitiv';
                }
                return true;
               },
              trigger: '10',
            },
            {
              id:'10',
              message:'Suma pe care esti dispus sa o platesti(RON)',
              trigger:'suma',
            },
            {
              id: 'suma',
              user: true,
              validator: (value)=>{
                if (isNaN(value)||value<0) {
                  return 'Valoarea trebuie sa fie un numar pozitiv';
                }
                return true;
               },
              trigger: '11',
            },
            { 
              id:'11',
              message:'Cum vrei sa platesti?',
              trigger:'12',
            },
            { 
              id:'12',
              options: [
                { value: 1, label: 'CASH', trigger: 'CASH' },
                { value: 2, label: 'CREDIT', trigger: 'CREDIT' },
              ],
            },
            {
              id:'CASH',
              message:'Ce suma ai stransa pana acum?(RON)',
              trigger:'cash'
            },
            {
              id:'cash',
              user:true,
              validator: (value)=>{
                if (isNaN(value)||value<0) {
                  return 'Valoarea trebuie sa fie un numar pozitiv';
                }
                return true;
               },
              trigger:'reviewCash'
            },
            {
              id:'CREDIT',
              message:'Ce avans ai?(RON)',
              trigger:'credit'
            },
            {
              id:'credit',
              user:true,
              validator: (value)=>{
                if (isNaN(value)||value<0) {
                  return 'Valoarea trebuie sa fie un numar pozitiv';
                }
                return true;

               },
              trigger:'reviewCredit'
            },
           {
            id:'reviewCash',
            component: <ReviewCash/>,
            asMessage: true,
           trigger:'13',
           },
           {
            id:'reviewCredit',
            component: <ReviewCredit/>,
            asMessage: true,
           trigger:'13',
           },
           {
             id:'13',
             message:'E ok?',
             trigger:'14'
           },
           {
            id:'14',
            options: [
              { value: 1, label: 'DA, mi se pare sustenabil', trigger: 'da' },
              { value: 2, label: 'NU, vreau sa ies', end: true, },
            ],
          },
         {
          id:'stingereCredit',
          message:'Ce suma ai imprumutat?(RON)',
          trigger:'sumaImpumutata'
         },
          {
            id: 'sumaImpumutata',
            user: true,
            validator: (value)=>{
              if (isNaN(value)||value<0) {
                return 'Valoarea trebuie sa fie un numar pozitiv';
              }
              return true;

             },
            trigger: '15',
          },
         {
          id:'15',
          message:'Pe cati ani ai luat creditul?',
          trigger:'anCredit'
         },
         {
          id: 'anCredit',
          user: true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }
            return true;

           },
          trigger: '16',
        },
        {
          id:'16',
          message:'Valoarea ratei(RON)',
          trigger:'rataValoare'
        },
        {
          id: 'rataValoare',
          user: true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }
            return true;

           },
          trigger: '17',
        },
        {
          id:'17',
          message:'Cu o dobanda de?(ex: 0.15)',
          trigger:'dobanda'
        },
        {
          id: 'dobanda',
          user: true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }
            return true;

           },
          trigger: '18',
        },
        {
          id:'18',
          message: 'Ce suma mai ai de platit?(RON)',
          trigger:'sumaRestanta'
        },
        {
          id: 'sumaRestanta',
          user: true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }
            return true;

           },
          trigger: '19',
        },
        {
          id:'19',
          component:<ReviewStingereCredit/>,
          asMessage:true,
          trigger:'final'
        },
        {
          id:'siguranta',
          message:'Ce suma iti exprima siguranta financiara?(RON)',
          trigger:'sumaSiguranta',
        },
        {
          id:'sumaSiguranta',
          user:true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }
            return true;

           },
          trigger:'20',
        },
        {
          id:'20',
          message:'In cat timp vrei sa o obtii?',
          trigger:'timpObtinere',
        },
        {
          id:'timpObtinere',
          user:true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }
            return true;

           },
          trigger:'21',
        },
        {
          id:'21',
          component:<ReviewSiguranta/>,
          asMessage:true,
          trigger:'final'
        },
        { 
          id:'pensie',
          message:'Varsta ta actuala?',
          trigger:'varstaActuala'
        },
        { 
          id:'varstaActuala',
          user:true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }else if (value>65){
              return 'Esti deja la pensie'
            }
            return true;

           },
          trigger:'22'
        },
         { 
          id:'22',
          message:'Varsta de pensionare',
          trigger:'varstaPensionare'
        },
        { 
          id:'varstaPensionare',
          user:true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }else if (value>70){
              return 'Nu cred ca este posibil'
            }
            return true;

           },
          trigger:'23'
        },
        { 
          id:'23',
          message:'Venitul lunar la pensionare',
          trigger:'venitPensionare'
        },
        { 
          id:'venitPensionare',
          user:true,
          validator: (value)=>{
            if (isNaN(value)||value<0) {
              return 'Valoarea trebuie sa fie un numar pozitiv';
            }
            return true;

           },
          trigger:'24'
        },
      
        {
          id:'24',
          component:<ReviewPensie/>,
          asMessage:true,
          trigger:'final',
        },
          {
            id:'da',
            message:'OK',
            trigger:'final',
          },
           {
            id:'final',
            message: 'Atat pe azi',
           end: true,
           },
          ]} 
          />
      );
    }
  }
  export default SimpleForm;
